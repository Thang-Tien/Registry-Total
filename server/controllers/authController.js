const bcrypt = require("bcrypt");
const connection = require("../config/DBConnection");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/email");

let user_id = -1;
let centre_id = -1;

// const setUserIdAndCenterId = (userId, centerId) => {
// 	user_id = userId;
// 	centerID = centerId;
// };

// const getUserId = () => user_id;
// const getCenterId = () => centerID;

const generateAccessToken = (user, res) => {
	const accessToken = jwt.sign(
		{ id: user.user_id, role: user.role },
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRES_TIME * 60 * 60 * 1000,
		}
	);

	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.COOKIE_EXPIRES_TIME * 60 * 60 * 1000
		),
		httpOnly: true,
	};

	res.cookie("jwt", accessToken, cookieOptions);
	return accessToken;
};

const login = async (req, res) => {
	connection.query(
		"SELECT * FROM users WHERE email = ?",
		req.body.email,
		(err, results, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else if (results[0].length == 0) {
				return res.status(401).json({
					status: "Failed",
					message: `Incorrect email or password`,
				});
			} else {
				user_id = results[0].user_id;
				centre_id = results[0].centre_id;
				console.log("user_id after login:", user_id);
				console.log("centreID after login", centre_id);

				bcrypt.compare(
					req.body.password,
					results[0].password,
					(err, result) => {
						if (!result) {
							return res.status(401).json({
								status: "Failed",
								message: `Incorrect email or password`,
							});
						}

						token = generateAccessToken(results[0], res);
						console.log(req.headers);
						return res.status(200).json({
							status: "Success",
							token,
							user: results,
						});
					}
				);
			}
		}
	);
};

const authenticateToken = async (req, res, next) => {
	try {
		let token;
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith("Bearer")
		) {
			token = req.headers.authorization.split(" ")[1];
		}

		if (!token) {
			return res.status(401).json({
				status: "Failed",
				message: "No token provided. Dang nhap di thg l",
			});
		}
		const decode = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decode);

		connection.query(
			`SELECT * FROM users WHERE user_id = ${decode.id}`,
			(err, currentUser, fields) => {
				if (!currentUser) {
					return res.status(401).json({
						status: "Failed",
						message: "User not found",
					});
				}

				req.user = currentUser[0];
				next();
			}
		);
	} catch (e) {
		statusCode = 500 || e.statusCode;
		return res.status(statusCode).json({
			status: "Failed",
			message: e,
		});
	}
};

const restrictAccessTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(401).json({
				status: "Failed",
				message: "You don't have permission to access this feature",
			});
		}
		next();
	};
};

const changePassword = async (req, res) => {
	console.log(req.body);
	connection.query(
		`SELECT password FROM users WHERE user_id = ${req.user.user_id}`,
		(err, results, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else {
				bcrypt.compare(
					req.body.currentPassword,
					results[0].password,
					(err, result) => {
						if (!result) {
							return res.status(401).json({
								status: "Failed",
								message: "Wrong current password",
							});
						} else {
							bcrypt.compare(
								req.body.newPassword,
								results[0].password,
								(err, result) => {
									if (result) {
										return res.status(400).json({
											status: "Failed",
											message:
												"New password is the same as current password",
										});
									} else {
										bcrypt.hash(
											req.body.newPassword,
											12,
											(err, hash) => {
												connection.query(
													`UPDATE users SET password = "${hash}" WHERE user_id = ${req.user.user_id}`,
													(err, results, field) => {
														if (err) {
															return res
																.status(500)
																.json({
																	status: "Failed",
																	message:
																		err,
																});
														} else {
															return res
																.status(200)
																.json({
																	status: "Success",
																	message:
																		"Change password successfully",
																});
														}
													}
												);
											}
										);
									}
								}
							);
						}
					}
				);
			}
		}
	);
};

const handleForgotPassword = async (req, res) => {
	connection.query(
		`SELECT * FROM users WHERE email = "${req.body.email}"`,
		(err, results, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			}
			if (!results[0]) {
				return res.status(401).json({
					status: "Failed",
					message: "Invalid email",
				});
			}
			crypto.randomBytes(48, async (err, buffer) => {
				const hashedToken = buffer.toString("hex");
				connection.query(
					`UPDATE users SET reset_password_token = "${hashedToken}", token_expired_date = NOW() + INTERVAL 3 HOUR WHERE email = "${req.body.email}"`,
					(err, results, fields) => {
						if (err) {
							return res.status(500).json({
								status: "Failed",
								message: err,
							});
						}
					}
				);
				sendEmail(
					{
						email: req.body.email,
						subject:
							"Password reset token (only valid for 3 hours)",
						text: hashedToken,
					},
					(err, info) => {
						if (err) {
							return res.status(500).json({
								status: "Failed",
								message: err,
							});
						}
						// else {
						//     return res.status(200).json({
						//         status: "Success",
						//         message: `Token has been sent to your email ${req.body.email}`,
						//         token: hashedToken
						//     })
						// }
					}
				);

				return res.status(200).json({
					status: "Success",
					message: `Token has been sent to your email ${req.body.email}`,
					token: hashedToken,
				});
			});
		}
	);
};

const resetPassword = async (req, res) => {
	connection.query(
		`SELECT *, NOW() as "current_time" FROM users WHERE reset_password_token = "${req.params.token}"`,
		(err, results, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			}
			if (!results[0]) {
				return res.status(401).json({
					status: "Failed",
					message: "Invalid token",
				});
			}
			if (results[0].token_expired_date < results[0].current_time) {
				return res.status(401).json({
					status: "Failed",
					message: "Token expired",
				});
			}

			bcrypt.hash(req.body.newPassword, 12, (err, encrypted) => {
				if (err) {
					return res.status(500).json({
						status: "Failed",
						message: err,
					});
				}
				connection.query(
					`UPDATE users SET password = "${encrypted}" WHERE user_id = ${results[0].user_id}`,
					(err, results, fields) => {
						if (err) {
							return res.status(500).json({
								status: "Failed",
								message: err,
							});
						} else {
							return res.status(200).json({
								status: "Success",
								message: "Reset password successfully",
							});
						}
					}
				);
			});
		}
	);
};

module.exports = {
	login,
	authenticateToken,
	restrictAccessTo,
	changePassword,
	handleForgotPassword,
	resetPassword,
	user_id,
	centre_id,
};
