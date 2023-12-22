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
    connection.query('SELECT * FROM users WHERE email = ?', req.body.email, (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err
            })
        } else if (!results[0]) {
            return res.status(401).json({
                status: "Failed",
                message: `Incorrect email or password`
            })
        } else {
            bcrypt.compare(req.body.password, results[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        status: "Failed",
                        message: `Incorrect email or password`
                    })
                }
                token = generateAccessToken(results[0], res);
                console.log(req.headers)
                return res.status(200).json({
                    status: "Success",
                    token,
                    user: results,
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

        if (!token) {
            return res.status(401).json({
                status: "Failed",
                message: "No token provided. Dang nhap di thg l"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)

        connection.query(`SELECT * FROM users WHERE user_id = ${decode.id}`, (err, currentUser, fields) => {

            if (!currentUser) {
                return res.status(401).json({
                    status: "Failed",
                    message: "User not found"
                })
            }

            req.user = currentUser[0]
            next()
        })
    } catch (e) {
        statusCode = 500 || e.statusCode
        return res.status(statusCode).json({
            status: "Failed",
            message: e
        })
    }

}

exports.restrictAccessTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                status: "Failed",
                message: "You don't have permission to access this feature"
            })
        }
        next()
    }
}

exports.changePassword = async (req, res) => {
    console.log(req.body)
    connection.query(`SELECT password FROM users WHERE user_id = ${req.user.user_id}`, (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err
            })
        }
        else {
            bcrypt.compare(req.body.currentPassword, results[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        status: "Failed",
                        message: "Wrong current password"
                    })
                } else {
                    bcrypt.compare(req.body.newPassword, results[0].password, (err, result) => {
                        if (result) {
                            return res.status(400).json({
                                status: "Failed",
                                message: "New password is the same as current password"
                            })
                        } else {
                            bcrypt.hash(req.body.newPassword, 12, (err, hash) => {
                                connection.query(`UPDATE users SET password = "${hash}" WHERE user_id = ${req.user.user_id}`,
                                    (err, results, field) => {
                                        if (err) {
                                            return res.status(500).json({
                                                status: "Failed",
                                                message: err
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
    connection.query(`SELECT * FROM users WHERE email = "${req.body.email}"`, (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err
            })
        }
        if (!results[0]) {
            console.log("invalid")
            return res.status(401).json({
                status: "Failed",
                message: "Invalid email"
            })
        }
        const otp = Math.floor(100000 + Math.random() * 900000)
        bcrypt.hash(otp.toString(), 12, (err, hashedOTP) => {
            if (err) {
                console.log(err)
            }
            console.log(hashedOTP)
            connection.query(`UPDATE users SET reset_password_otp = "${hashedOTP}", token_expired_date = NOW() + INTERVAL 3 HOUR WHERE email = "${req.body.email}"`, (err, results, fields) => {
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        message: err
                    })
                }
            })
            sendEmail({
                email: req.body.email,
                subject: 'Password reset otp (only valid for 3 hours)',
                text: otp
            }, (err, info) => {
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        message: err
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

            // res.status(200).json({
            //     status: "Success",
            //     message: `Reset password has been sent to your email ${req.body.email}`,
            //     token: hashedOTP
            // })
        })

    })



}

exports.resetPassword = async (req, res) => {

    connection.query(`SELECT *, NOW() as "current_time" FROM users WHERE email = "${req.body.email}"`, (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: err
            })
        }
        if (!results[0]) {
            return res.status(401).json({
                status: "Failed",
                message: "User not found"
            })
        }
        if (results[0].token_expired_date < results[0].current_time) {
            return res.status(401).json({
                status: "Failed",
                message: "OTP expired"
            })
        }

        bcrypt.compare(req.body.otp.toString(), results[0].reset_password_otp, (err, same) => {
            if (!same) {
                return res.status(401).json({
                    status: "Failed",
                    message: "Wrong OTP"
                })
            }
            else {
                bcrypt.hash(req.body.newPassword, 12, (err, encrypted) => {
                    if (err) {
                        return res.status(500).json({
                            status: "Failed",
                            message: err
                        })
                    }
                    connection.query(`UPDATE users SET password = "${encrypted}" WHERE user_id = ${results[0].user_id}`, (err, results, fields) => {
                        if (err) {
                            return res.status(500).json({
                                status: "Failed",
                                message: err
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