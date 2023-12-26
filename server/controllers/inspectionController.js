const connection = require("../config/DBConnection");
const utils = require("../utils/utils");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const { user_id, centre_id, login } = require("./authController");

// DONE
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
exports.countInspectionsOfEachCentre = async (req, res) => {
	const centreId = req.params.centreId; // Extract centreId from the URL

	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT COUNT(*) as total 
                     FROM inspections i 
                     INNER JOIN registration_centres r 
                     ON i.centre_id = r.centre_id 
                     WHERE ${
							queryString ? queryString : 1
						} AND i.centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong tháng này
exports.countInspectionsOfEachCentreThisMonth = async (req, res) => {
	const centreId = req.params.centreId; // Extract centreId from the URL
	const firstDayOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1
	);
	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT COUNT(*) as total 
                     FROM inspections i 
                     INNER JOIN registration_centres r 
                     ON i.centre_id = r.centre_id 
                     WHERE ${
							queryString ? queryString : 1
						} AND i.inspection_date <= LAST_DAY(NOW()) AND i.centre_id = ? AND i.inspection_date >= ?`,
		[centreId, firstDayOfMonth],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong năm này
exports.countInspectionsOfEachCentreThisYear = async (req, res) => {
	const centreId = req.params.centreId; // Extract centreId from the URL
	const firstDayOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1
	);
	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT COUNT(*) as total 
                     FROM inspections i 
                     INNER JOIN registration_centres r 
                     ON i.centre_id = r.centre_id 
                     WHERE ${
							queryString ? queryString : 1
						} AND YEAR(i.inspection_date) = YEAR(NOW()) AND i.centre_id = ? `,
		[centreId, firstDayOfMonth],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: err,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};
// DONE nhưng không liên quan
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc
exports.countTotalExpiredInspectionsOfEachCentre = async (req, res) => {
	const centreId = req.params.centreId;
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date < NOW() AND centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: {
						err,
					},
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};

// DONE
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc trong tháng này
exports.countTotalExpiredInspectionsOfEachCentreThisMonth = async (
	req,
	res
) => {
	const centreId = req.params.centreId;
	// Lấy ngày đầu tiên của tháng hiện tại
	const firstDayOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1
	);
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date < NOW() AND centre_id = ? AND expired_date >= ?`,
		[centreId, firstDayOfMonth],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: {
						err,
					},
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};

// DONE
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc (hiện tại <= ngày hết hạn <= hiện tại + 1 tháng)
exports.countTotalAboutToExpiredInspectionsOfEachCentre = async (req, res) => {
	const centreId = req.params.centreId;
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date >= NOW() 
                            AND expired_date <= DATE_ADD(NOW(), INTERVAL 1 MONTH) AND centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: {
						err,
					},
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc trong tháng này
exports.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth = async (
	req,
	res
) => {
	const centreId = req.params.centreId;
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date >= NOW() 
                            AND expired_date <= LAST_DAY(NOW()) AND centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					error: {
						err,
					},
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};
// NOT DONE
// dự đoán số lượng xe đăng kiểm mới của mỗi trung tâm
// (xe đăng ký dự đoán ở tỉnh nào thì dự đoán số lượng xe đăng kiểm mới của trung tâm ở tỉnh đó)
exports.predictAboutToInspectOfEachCentre = async (req, res) => {
	const centreId = req.params.centreId;
	connection.query(
		`SELECT COUNT(*) 
                    FROM cars c INNER JOIN registration_centres r
                    ON c.predictedAddress = r.address 
                    WHERE c.inspected = false AND r.centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else {
				return res.status(202).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};

// DONE
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc
exports.getInspection = (req, res) => {
	const centreId = req.params.centreId;
	let queryString = utils.generateQueryString(req.query);
	connection.query(
		`SELECT * FROM inspections 
                    WHERE ${queryString ? queryString : 1} AND centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else if (result.length == 0) {
				return res.status(404).json({
					status: "Failed",
					message: `Can't find inspection with ${utils.generateErrorQueryValue(
						req.query
					)}`,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};

// DONE
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc bao gồm thông tin chi tiết
// tất cả thông tin chi tiết ( nối ba bảng gồm: inspections, cars, car_owners)
exports.getInspectionAndOwner = (req, res) => {
	const centreId = req.params.centreId;
	let queryString = utils.generateQueryString(req.query);
	connection.query(
		`SELECT * 
                    FROM inspections i 
                    INNER JOIN cars c ON c.car_id = i.car_id
                    INNER JOIN car_owners co ON co.owner_id = c.owner_id
                    WHERE ${queryString ? queryString : 1} AND i.centre_id = ?`,
		[centreId],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else if (result.length == 0) {
				return res.status(404).json({
					status: "Failed",
					message: `Can't find inspection with ${utils.generateErrorQueryValue(
						req.query
					)}`,
				});
			} else {
				return res.status(200).json({
					status: "Success",
					data: result,
				});
			}
		}
	);
};

// Tạo đăng kiểm
// đang để tạm user_id = 1, centre_id = 1, specify = "carry_people$lte:9-personal+manufacture$lte:7~36~24", first_time = 0
// vì chưa có chức năng đăng nhập
exports.createInspection = (req, res) => {
	const number_plate = req.body.number_plate; // Thay vì sử dụng req.params, đọc từ req.body
	let queryString = utils.generateQueryString(req.query);

	connection.query(
		`SELECT *
        FROM inspections i
        INNER JOIN cars c ON c.car_id = i.car_id WHERE i.car_id = (SELECT car_id FROM cars WHERE number_plate = ?)`,
		[number_plate],
		(err, result, fields) => {
			if (err) {
				return res.status(500).json({
					status: "Failed",
					message: err,
				});
			} else {
				const inspection_date = new Date();
				const expired_date = new Date(inspection_date);
				expired_date.setMonth(expired_date.getMonth() + 6);
				connection.query(
					`INSERT INTO inspections (inspection_id, inspection_number, inspection_date, car_id, user_id, centre_id, specify, first_time, expired_date)
						SELECT
    						COALESCE(MAX(inspection_id), 0) + 1,
							CONCAT(YEAR(CURDATE()), '-', LPAD(COALESCE(MAX(CAST(SUBSTRING(inspection_number, 6) AS UNSIGNED)), 0) + 1, 6, '0')),
							?,
							(SELECT car_id FROM cars WHERE number_plate = ?),
							?, ?, ?, ?,
							?
						FROM inspections;`,
					[
						inspection_date,
						number_plate,
						"1",
						"1",
						"carry_people$lte:9-personal+manufacture$lte:7~36~24",
						"0",
						expired_date,
					],
					(insertErr, insertResult, insertFields) => {
						if (insertErr) {
							return res.status(500).json({
								status: "Failed",
								message: insertErr,
							});
						} else {
							return res.status(201).json({
								status: "Success",
								message: "Create inspection successfully",
								data: insertResult,
							});
						}
					}
				);
			}
		}
	);
};
exports.getInspectionX = (req, res) => {
	login(req, res, () => {
		console.log(centre_id);
		connection.query(
			`SELECT * FROM users WHERE centre_id=?`,
			[centre_id],

			(err, result, fields) => {
				if (err) {
					return res.status(500).json({
						status: "Failed",
						message: err,
					});
				} else if (result.length == 0) {
					return res.status(404).json({
						status: "Failed",
						message: `Can't find inspection with ${utils.generateErrorQueryValue(
							req.query
						)}`,
					});
				} else {
					return res.status(200).json({
						status: "Success",
						data: result,
					});
				}
			}
		);
	});
};
