const bcrypt = require('bcrypt')
const connection = require('../config/DBConnection')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendEmail = require('../utils/email')

const generateAccessToken = (user, res) => {
    const accessToken = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME * 60 * 60 * 1000
    })

    const cookieOptions = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 60 * 60 * 1000),
        httpOnly: true
    }

    res.cookie('jwt', accessToken, cookieOptions)
    return accessToken
}

exports.login = async (req, res) => {
    console.log(req.body);
    connection.query('SELECT * FROM users WHERE email = ?', req.body.email, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else if (!result[0]) {
            return res.status(401).json({
                status: "Failed",
                error: `Incorrect email or password`
            })
        } else {
            console.log(result[0])
            bcrypt.compare(req.body.password, result[0].password, (err, same) => {
                if (!same) {
                    return res.status(401).json({
                        status: "Failed",
                        error: `Incorrect email or password`
                    })
                }
                token = generateAccessToken(result[0], res);
                console.log(req.headers)
                return res.status(200).json({
                    status: "Success",
                    token,
                    user: result,
                })
            })

        }

    })
}

exports.authenticateToken = async (req, res, next) => {
    try {
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        console.log(req.headers)
        if (!token) {
            return res.status(401).json({
                status: "Failed",
                error: "No token provided. Please login"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)

        connection.query(`SELECT * FROM users WHERE user_id = ${decode.id}`, (err, currentUser, fields) => {

            if (currentUser.length == 0) {
                return res.status(401).json({
                    status: "Failed",
                    error: "User not found"
                })
            }

            console.log(decode.iat, parseInt(currentUser[0].last_change_password_date.getTime() / 1000, 10))
            // check if user is using old token which was generated before changing password
            if (decode.iat < parseInt(currentUser[0].last_change_password_date.getTime() / 1000, 10)) {
                return res.status(400).json({
                    status: "Failed",
                    error: "Your password has changed, please login again!"
                })
            }

            const currentTime = new Date(new Date().setTime(new Date().getTime() + 7 * 60 * 60 * 1000))
            // check if token's expired date > current date
            if (decode.exp < parseInt(currentTime / 1000, 10)) {
                return res.status(400).json({
                    status: "Failed",
                    error: "Your token is expired!"
                })
            }

            req.user = currentUser[0]
            next()
        })
    } catch (e) {
        statusCode = 500 || e.statusCode
        return res.status(statusCode).json({
            status: "Failed",
            error: e
        })
    }

}

exports.restrictAccessTo = (...roles) => {
    
    return (req, res, next) => {
        console.log(roles.includes(req.user.role))
        console.log("role", roles)
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                status: "Failed",
                error: "You don't have permission to access this feature"
            })
        }
        next()
    }
}

exports.changePassword = async (req, res) => {
    console.log(req.body)
    connection.query(`SELECT password FROM users WHERE user_id = ${req.user.user_id}`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        }
        else {
            bcrypt.compare(req.body.currentPassword, result[0].password, (err, same) => {
                if (!same) {
                    return res.status(401).json({
                        status: "Failed",
                        error: "Wrong current password"
                    })
                } else {
                    bcrypt.compare(req.body.newPassword, result[0].password, (err, same) => {
                        if (same) {
                            return res.status(400).json({
                                status: "Failed",
                                error: "New password is the same as current password"
                            })
                        } else {
                            bcrypt.hash(req.body.newPassword, 12, (err, hash) => {
                                connection.query(`UPDATE users SET password = "${hash}", last_change_password_date = NOW() WHERE user_id = ${req.user.user_id}`,
                                    (err, result, field) => {
                                        if (err) {
                                            return res.status(500).json({
                                                status: "Failed",
                                                error: err
                                            })
                                        } else {
                                            return res.status(200).json({
                                                status: "Success",
                                                message: "Change password successfully"
                                            })
                                        }

                                    })
                            })

                        }
                    })
                }
            })
        }
    })
}

exports.handleForgotPassword = async (req, res) => {
    connection.query(`SELECT * FROM users WHERE email = "${req.body.email}"`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        }
        if (!result[0]) {
            console.log("invalid")
            return res.status(401).json({
                status: "Failed",
                error: "Invalid email"
            })
        }
        const otp = Math.floor(100000 + Math.random() * 900000)
        bcrypt.hash(otp.toString(), 12, (err, hashedOTP) => {
            if (err) {
                console.log(err)
            }
            console.log(hashedOTP)
            connection.query(`UPDATE users SET reset_password_otp = "${hashedOTP}", otp_expired_date = NOW() + INTERVAL 3 HOUR WHERE email = "${req.body.email}"`, (err, result, fields) => {
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        error: err
                    })
                } else {
                    sendEmail({
                        email: req.body.email,
                        subject: 'Password reset otp (only valid for 3 hours)',
                        text: otp.toString()
                    }, (err, info) => {
                        if (err) {
                            return res.status(500).json({
                                status: "Failed",
                                error: err
                            })
                        }
                        else {
                            return res.status(200).json({
                                status: "Success",
                                message: `Token has been sent to your email ${req.body.email}`,
                                otp: otp
                            })
                        }
                    })
                }
            })


            // res.status(200).json({
            //     status: "Success",
            //     message: `Reset password has been sent to your email ${req.body.email}`,
            //     token: hashedOTP
            // })
        })

    })
}

exports.checkOTP = (req, res) => {
    connection.query(`SELECT *, NOW() as "current_time" FROM users WHERE email = "${req.body.email}"`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        }
        console.log("heere")
        if (result.length == 0) {
            return res.status(401).json({
                status: "Failed",
                error: "User not found"
            })
        }

        if (result[0].token_expired_date < result[0].current_time) {
            return res.status(401).json({
                status: "Failed",
                error: "OTP expired"
            })
        }
        bcrypt.compare(req.body.otp.toString(), result[0].reset_password_otp, (err, same) => {
            if (!same) {
                return res.status(401).json({
                    status: "Failed",
                    error: "Wrong OTP"
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    message: "OTP accepted"
                })
            }
        })
    })
}

exports.resetPassword = async (req, res) => {

    connection.query(`SELECT *, NOW() as "current_time" FROM users WHERE email = "${req.body.email}"`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        }
        if (result.length == 0) {
            return res.status(401).json({
                status: "Failed",
                error: "User not found"
            })
        }
        if (result[0].token_expired_date < result[0].current_time) {
            return res.status(401).json({
                status: "Failed",
                error: "OTP expired"
            })
        }

        bcrypt.compare(req.body.otp.toString(), result[0].reset_password_otp, (err, same) => {
            if (!same) {
                return res.status(401).json({
                    status: "Failed",
                    error: "Wrong OTP"
                })
            }
            else {
                bcrypt.hash(req.body.newPassword, 12, (err, encrypted) => {
                    if (err) {
                        return res.status(500).json({
                            status: "Failed",
                            error: err
                        })
                    }
                    connection.query(`UPDATE users SET password = "${encrypted}" WHERE user_id = ${result[0].user_id}`, (err, result, fields) => {
                        if (err) {
                            return res.status(500).json({
                                status: "Failed",
                                error: err
                            })
                        }
                        else {
                            return res.status(200).json({
                                status: "Success",
                                message: "Reset password successfully"
                            })
                        }
                    })
                })
            }
        })




    })
}