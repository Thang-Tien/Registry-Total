const connection = require("../config/DBConnection");
const utils = require("../utils/utils");
const PDFDocument = require("pdfkit");
const fs = require("fs");
//DONE
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
exports.countInspectionsOfEachCentre = async (req, res) => {
	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT COUNT(*) as total 
                     FROM inspections i 
                     WHERE ${
							queryString ? queryString : 1
						} AND i.centre_id = ?`,
		[req.user.centre_id],
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
//DONE
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong tháng này
exports.countInspectionsOfEachCentreThisMonth = async (req, res) => {
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
                     WHERE ${
							queryString ? queryString : 1
						} AND i.inspection_date <= LAST_DAY(NOW()) AND i.centre_id = ? AND i.inspection_date >= ?`,
		[req.user.centre_id, firstDayOfMonth],
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
//DONE
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong năm này
exports.countInspectionsOfEachCentreThisYear = async (req, res) => {
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
                     WHERE ${
							queryString ? queryString : 1
						} AND YEAR(i.inspection_date) = YEAR(NOW()) AND i.centre_id = ? `,
		[req.user.centre_id, firstDayOfMonth],
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
// số lượng đăng kiểm của tôi (staff)
exports.countInspectionsOfMine = async (req, res) => {
	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT COUNT(*) as total 
                     FROM inspections i 
                     WHERE ${queryString ? queryString : 1} AND i.user_id = ?`,
		[req.user.user_id],
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
// Lấy ra tổng số lượng đăng kiểm của 12 tháng gần nhất CÓ ĐĂNG KIỂM của centre mà staff đang làm việc
exports.countInspectionEachCenterLastTwelveMonths = async (req, res) => {
	let queryString = utils.generateQueryStringWithDate(
		req.query,
		"inspection_date"
	);
	connection.query(
		`SELECT
 			CONCAT( EXTRACT(MONTH FROM inspection_date),"/",EXTRACT(YEAR FROM inspection_date) ) as monthYear,
  			COUNT(*) AS count
		FROM inspections
  		Where ${queryString ? queryString : 1} AND centre_id = ?
		GROUP BY EXTRACT(MONTH FROM inspection_date),EXTRACT(YEAR FROM inspection_date)
		ORDER BY
  			EXTRACT(YEAR FROM inspection_date) DESC, EXTRACT(MONTH FROM inspection_date) DESC
  		Limit 12;`,
		[req.user.centre_id],
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
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date < NOW() AND centre_id = ?`,
		[req.user.centre_id],
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
		[req.user.centre_id, firstDayOfMonth],
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
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date >= NOW() 
                            AND expired_date <= DATE_ADD(NOW(), INTERVAL 1 MONTH) AND centre_id = ?`,
		[req.user.centre_id],
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
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc trong tháng này
exports.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth = async (
	req,
	res
) => {
	connection.query(
		`SELECT COUNT(*) 
                    FROM inspections 
                    WHERE expired_date >= NOW() 
                            AND expired_date <= LAST_DAY(NOW()) AND centre_id = ?`,
		[req.user.centre_id],
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
// dự đoán số lượng xe đăng kiểm mới của mỗi trung tâm
// (xe đăng ký dự đoán ở tỉnh nào thì dự đoán số lượng xe đăng kiểm mới của trung tâm ở tỉnh đó)
exports.predictAboutToInspectOfEachCentre = async (req, res) => {
	connection.query(
		`SELECT COUNT(*) 
                    FROM cars c INNER JOIN registration_centres r
                    ON c.predictedAddress = r.address 
                    WHERE c.inspected = false AND r.centre_id = ?`,
		[req.user.centre_id],
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
	let queryString = utils.generateQueryString(req.query);
	connection.query(
		`SELECT * FROM inspections 
                    WHERE ${queryString ? queryString : 1} AND centre_id = ?
					ORDER BY
  			EXTRACT(YEAR FROM inspection_date) DESC, EXTRACT(MONTH FROM inspection_date) DESC,EXTRACT(DAY FROM inspection_date) DESC`,
		[req.user.centre_id],
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
	let queryString = utils.generateQueryString(req.query);
	connection.query(
		`SELECT * 
                    FROM inspections i 
                    INNER JOIN cars c ON c.car_id = i.car_id
                    INNER JOIN car_owners co ON co.owner_id = c.owner_id
                    WHERE ${queryString ? queryString : 1} AND i.centre_id = ?`,
		[req.user.centre_id],
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
// Tạo đăng kiểm cho trung tâm mà staff đang làm việc
//  specify = "carry_people$lte:9-personal+manufacture$lte:7~36~24"
exports.createInspection = (req, res) => {
	const number_plate = req.body.number_plate;
	const wheel_formula = req.body.wheel_formula; // công thức bánh xe
	const wheel_tread = req.body.wheel_tread; // vết bánh xe
	const overall_dimension = req.body.overall_dimension; // kích thước bao
	const container_dimension = req.body.container_dimension; // kích thước lòng thùng xe
	const length_base = req.body.length_base; // chiều dài cơ sở
	const kerb_mass = req.body.kerb_mass; // khối lượng bản thân
	const designed_and_authorized_payload =
		req.body.designed_and_authorized_payload; // Khối lượng hàng CC theo TK/CP TGGT
	const designed_and_authorized_total_mass =
		req.body.designed_and_authorized_total_mass; // Khối lượng toàn bộ theo TK/CP TGGT
	const designed_and_authorized_towed_mass =
		req.body.designed_and_authorized_towed_mass; // Khối lượng kéo theo TK/CP TGGT
	const permissible_carry = req.body.permissible_carry; // Số lượng người cho phép chở
	const engine_displacement = req.body.engine_displacement; // Thể tích làm việc của động cơ
	const maximum_output_to_rpm_ratio = req.body.maximum_output_to_rpm_ratio; // Công suất lớn nhất/tốc độ quay
	const fuel = req.body.fuel; // Loại nhiên liệu
	const number_of_tires = req.body.number_of_tires; // Số lượng lốp
	const tire_size = req.body.tire_size; // Cỡ lốp/trục
	const recovered = req.body.recovered; // Cải tạo
	const purpose = req.body.purpose; // Kinh doanh vận tải
	let queryString = utils.generateQueryString(req.query);

	const inspection_date = new Date();
	const expired_date = new Date(inspection_date);
	expired_date.setMonth(expired_date.getMonth() + 6);

	// Truy vấn con để đếm số lần đăng kiểm
	connection.query(
		`SELECT COUNT(*) as count FROM inspections WHERE car_id = (SELECT car_id FROM cars WHERE number_plate = ?)`,
		[number_plate],
		(countErr, countResult, countFields) => {
			if (countErr) {
				return res.status(500).json({
					status: "Failed",
					message: countErr,
				});
			}

			const first_time = countResult[0].count === 0 ? 1 : 0;

			connection.query(
				`INSERT INTO inspections (inspection_id, inspection_number, inspection_date, car_id, user_id, centre_id, specify, first_time, expired_date)
          SELECT
            COALESCE(MAX(inspection_id), 0) + 1,
            CONCAT(YEAR(CURDATE()), '-', LPAD(COALESCE(MAX(CAST(SUBSTRING(inspection_number, 6) AS UNSIGNED)), 0) + 1, 6, '0')),
            ?,
            (SELECT car_id FROM cars WHERE number_plate = ?),
            ?, ?, ?, ?,
            ?
          FROM inspections`,
				[
					inspection_date,
					number_plate,
					req.user.user_id,
					req.user.centre_id,
					"carry_people$lte:9-personal+manufacture$lte:7~36~24",
					first_time,
					expired_date,
				],
				(insertErr, insertResult, insertFields) => {
					if (insertErr) {
						return res.status(500).json({
							status: "Failed",
							message: insertErr,
						});
					}

					// Câu lệnh UPDATE
					connection.query(
						`UPDATE cars SET inspected = 1,
						wheel_formula = ?,
						wheel_tread = ?,
					    overall_dimension = ?,
						container_dimension = ?,
						length_base = ?,
						kerb_mass = ?,
						designed_and_authorized_payload = ?,
						designed_and_authorized_total_mass = ?,
						designed_and_authorized_towed_mass = ?, 
						permissible_carry = ?,
						engine_displacement = ?,
						maximum_output_to_rpm_ratio = ?,
						fuel = ?,
						number_of_tires_and_tire_size=?,
						recovered = ?,
						purpose = ?
							WHERE number_plate = ?`,
						[
							wheel_formula,
							wheel_tread + " (mm)",
							overall_dimension + " (mm)",
							container_dimension + " (mm)",
							length_base + " (mm)",
							kerb_mass + " (kg)",
							designed_and_authorized_payload + " (kg)",
							designed_and_authorized_total_mass + " (kg)",
							designed_and_authorized_towed_mass + " (kg)",
							permissible_carry,
							engine_displacement + " (cm3)",
							maximum_output_to_rpm_ratio,
							fuel,
							number_of_tires + " tires, " + tire_size,
							recovered,
							purpose,
							number_plate,
						],
						(updateErr, updateResult, updateFields) => {
							if (updateErr) {
								return res.status(500).json({
									status: "Failed",
									message: updateErr,
								});
							}

							return res.status(201).json({
								status: "Success",
								message: "Create inspection successfully",
								data: insertResult,
							});
						}
					);
				}
			);
		}
	);
};
