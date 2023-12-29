const connection = require("../config/DBConnection");
const utils = require("../utils/utils");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/email");
const { connect } = require("../routes/centreRoute");

exports.getUser = (req, res) => {
	let queryString = utils.generateQueryString(req.query);
	connection.query(
		`SELECT * FROM users WHERE ${queryString ? queryString : 1}`,
		utils.getQueryValue(req.query),
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			} else if (result.length == 0) {
				return res.status(400).json({
					status: "Failed",
					error: `Can not find user with ${utils.generateErrorQueryValue}`,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result[0],
				});
			}
		}
	);
};

exports.createUser = (req, res) => {
	connection.query(
		`SELECT * FROM users WHERE ssn = ? OR phone = ? OR email = "?"`,
		[req.body.ssn, req.body.phone, req.body.email],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			}
			if (result.length != 0) {
				if (result[0].ssn == req.body.ssn) {
					return res.status(400).json({
						status: "Failed",
						error: "Social security number already exist",
					});
				}
				if (result[0].phone == req.body.phone) {
					return res.status(400).json({
						status: "Failed",
						error: "Phone number already exist",
					});
				}
				if (result[0].email == req.body.email) {
					return res.status(400).json({
						status: "Failed",
						error: "Email already exist",
					});
				}
			} else {
				const password = Math.floor(100000 + Math.random() * 900000);
				const splited = req.body.date_of_birth.split("/");
				const formatedDOB = `${splited[2]}/${splited[1]}/${splited[0]}`;
				bcrypt.hash(password.toString(), 12, (err, hashedPassword) => {
					connection.query(
						`INSERT INTO users (ssn, date_of_birth, name, phone, email, password, centre_id, role, active) VALUE(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
						[
							req.body.ssn,
							formatedDOB,
							req.body.name,
							req.body.phone,
							req.body.email,
							hashedPassword,
							req.body.centre_id,
							"staff",
							true,
						],
						(err, result, fields) => {
							if (err) {
								return res.status(500).json({
									status: "Failed",
									error: err,
								});
							} else {
								sendEmail(
									{
										email: req.body.email,
										subject:
											"Your account has been created",
										text: `Your password is ${password}, please login to change your password`,
									},
									(err, info) => {
										console.log("done emailing");
										console.log(!err);
										if (err) {
											return res.status(500).json({
												status: "Failed",
												error: err,
											});
										} else {
											return res.status(200).json({
												status: "Success",
												message: `Successfully created new account with ${utils.generateErrorQueryValue(
													req.body
												)}`,
											});
										}
									}
								);
							}
						}
					);
				});
			}
		}
	);
};

exports.deleteUser = (req, res) => {
	connection.query(
		`SELECT * FROM users WHERE user_id = ${req.body.user_id}`,
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			}
			if (result.length == 0) {
				return res.status(400).json({
					status: "Failed",
					message: `Cannot find user with ${utils.generateErrorQueryValue(
						req.body
					)}`,
				});
			}

			connection.query(
				`DELETE from users WHERE user_id = ${req.body.user_id}`,
				(err, result, fields) => {
					if (err) {
						return res.status(500).json({
							status: "Failed",
							error: err,
						});
					} else {
						return res.status(200).json({
							status: "Success",
							message: `Successfully delete user with user_id = ${req.body.user_id}`,
						});
					}
				}
			);
		}
	);
};

exports.changeUserInfo = (req, res) => {
	connection.query(
		`UPDATE users SET name = ?, date_of_birth = ?, phone = ? WHERE user_id = ${req.user.user_id}`,
		[req.body.name, req.body.date_of_birth, req.body.phone],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			} else {
				return res.status(500).json({
					status: "Success",
					message: `Successfully update user with user_id = ${
						req.user.user_id
					} ${utils.generateErrorQueryValue(req.body)}`,
				});
			}
		}
	);
};
