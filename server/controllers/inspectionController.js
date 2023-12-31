const connection = require('../config/DBConnection')
const utils = require('../utils/utils')
const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.countInspectionsOfAllCentre = async (req, res) => {
    let queryString = utils.generateQueryStringWithDate(req.query, 'inspection_date')
    connection.query(`SELECT COUNT(*) as total FROM inspections i INNER JOIN registration_centres r ON i.centre_id = r.centre_id WHERE ${queryString ? queryString : 1}`, 
    utils.getQueryValue(req.query), (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: 'Failed',
                 error: err
            })
        } else {
            return res.status(200).json({
                status: "Success",
                data: result[0]
            })
        }
    })
}

exports.countTotalExpiredInspectionsOfAllCentre = async (req, res) => {
    connection.query(`SELECT COUNT(*) FROM inspections WHERE expired_date < NOW()`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: 'Failed',
                error: err
            })
        } else {
            return res.status(200).json({
                status: "Success",
                data: result[0]
            })
        }
    })
}

exports.countTotalAboutToExpiredInspectionsOfAllCentre = async (req, res) => {
    connection.query(`SELECT * FROM inspections WHERE expired_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH) AND expired_date <= NOW()`, 
    (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: 'Failed',
                error: err
            })
        } else {
            return res.status(200).json({
                status: "Success",
                data: result[0]
            })
        }
    })
}

exports.predictAboutToInspect = async (req, res) => {
    connection.query(`SELECT COUNT(*) FROM cars WHERE inspected = false`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            return res.status(202).json({
                status: "Success",
                data: result[0]
            })
        }
    })
}

exports.getInspection = (req, res) => {
    let queryString = utils.generateQueryString(req.query)
    connection.query(`SELECT * FROM inspections WHERE ${queryString ? queryString : 1}`, 
    utils.getQueryValue(req.query), (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else if (result.length == 0) {
            return res.status(404).json({
                status: "Failed",
                message: `Can't find inspection with ${utils.generateErrorQueryValue(req.query)}`
            })
        } else {
            return res.status(200).json({
                status: "Success",
                data: result[0]
            })
        }
    })

    
}


//DONE
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
// API done, not authenticated

exports.countInspectionsOfEachCentre = async (req, res) => {
    const centreID = req.params.centre_id;
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
        [centreID],
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
// api done, not authenticated
exports.countInspectionsOfEachCentreThisMonth = async (req, res) => {
    const centreID = req.params.centre_id;
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
        [centreID, firstDayOfMonth],
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
// api done, not authenticated
exports.countInspectionsOfEachCentreThisYear = async (req, res) => {
    const centreID = req.params.centre_id;
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
        [centreID, firstDayOfMonth],
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
    const userID = req.params.user_id;
    let queryString = utils.generateQueryStringWithDate(
        req.query,
        "inspection_date"
    );
    connection.query(
        `SELECT COUNT(*) as total 
                     FROM inspections i 
                     WHERE ${queryString ? queryString : 1} AND i.user_id = ?`,
        [userID],
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
    const centreID = req.params.centre_id;
    let queryString = utils.generateQueryStringWithDate(
        req.query,
        "inspection_date"
    );
    connection.query(
        `SELECT
					COUNT(*) AS count,
 					CONCAT( EXTRACT(MONTH FROM inspection_date),"/",EXTRACT(YEAR FROM inspection_date) ) as monthYear

				FROM inspections
  			Where ${queryString ? queryString : 1} AND centre_id = ?
				GROUP BY EXTRACT(MONTH FROM inspection_date),EXTRACT(YEAR FROM inspection_date)
				ORDER BY
  					EXTRACT(YEAR FROM inspection_date) DESC, EXTRACT(MONTH FROM inspection_date) DESC
  			Limit 12;`,
        [centreID],
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

// đếm số lượng đăng kiểm theo tháng của từng trung tâm
exports.countInspectionEachCenterPerMonth = async (req, res) => {
    const centreID = req.params.centre_id;
    let queryString = utils.generateQueryStringWithDate(
        req.query,
        "inspection_date"
    );
    connection.query(
        `SELECT
					COUNT(*) AS count,
 					CONCAT( EXTRACT(MONTH FROM inspection_date),"/",EXTRACT(YEAR FROM inspection_date) ) as monthYear

				FROM inspections
  			Where ${queryString ? queryString : 1} AND centre_id = ?
				GROUP BY EXTRACT(MONTH FROM inspection_date),EXTRACT(YEAR FROM inspection_date)
				ORDER BY
  					EXTRACT(YEAR FROM inspection_date) DESC, EXTRACT(MONTH FROM inspection_date) DESC;`,
        [centreID],
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
    const centreID = req.params.centre_id;
    // Lấy ngày đầu tiên của tháng hiện tại
    const firstDayOfMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
    );
    connection.query(
        `SELECT COUNT(*) as value
                    FROM inspections 
                    WHERE expired_date < NOW() AND centre_id = ? AND expired_date >= ?`,
        [centreID, firstDayOfMonth],
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
    const centreID = req.params.centre_id;
    connection.query(
        `SELECT COUNT(*) as value
                    FROM inspections 
                    WHERE expired_date >= NOW() 
                            AND expired_date <= LAST_DAY(NOW()) AND centre_id = ?`,
        [centreID],
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
exports.getInspectionPerCentreID = (req, res) => {
    const centreID = req.params.centre_id;
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT i.inspection_id, 
								c.car_id, 
								i.inspection_number, 
								c.number_plate,
								i.inspection_date,
								i.expired_date
								FROM inspections AS i
                                INNER JOIN cars c ON c.car_id = i.car_id
                    WHERE ${queryString ? queryString : 1} AND centre_id = ?
				ORDER BY
  					EXTRACT(YEAR FROM inspection_date) DESC, 
						EXTRACT(MONTH FROM inspection_date) DESC,
						EXTRACT(DAY FROM inspection_date) DESC`,
        [centreID],
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

exports.getAllINspectionNumberAndCentreName = (req, res) => {
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT i.inspection_id, i.inspection_number, r.name
			FROM inspections AS i 
            INNER JOIN registration_centres AS r 
            ON r.centre_id = i.centre_id`,
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
// Get recently inspections per centre_id
exports.getRecentlyInspection = (req, res) => {
    const centreID = req.params.centre_id;
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT i.inspection_id, 
								c.car_id, 
								i.inspection_number, 
								c.number_plate,
								i.inspection_date,
								i.expired_date 
									FROM inspections AS i
										INNER JOIN cars c ON c.car_id = i.car_id
                    WHERE ${queryString ? queryString : 1} AND i.centre_id = ?
				ORDER BY
  					EXTRACT(YEAR FROM inspection_date) DESC, 
						EXTRACT(MONTH FROM inspection_date) DESC,
						EXTRACT(DAY FROM inspection_date) DESC
				LIMIT 5`,
        [centreID],
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

// Get inspection by user_id (đăng kiểm của tôi)

exports.getMineInspection = async (req, res) => {
    const userID = req.params.user_id;
    let queryString = utils.generateQueryStringWithDate(
        req.query,
        "inspection_date"
    );
    connection.query(
        `SELECT i.inspection_id, 
			    c.car_id, 
				i.inspection_number, 
			    c.number_plate,
				i.inspection_date,
				i.expired_date 
		FROM inspections AS i
			INNER JOIN cars c ON c.car_id = i.car_id 
        WHERE ${queryString ? queryString : 1} AND i.user_id = ?
        ORDER BY
  			EXTRACT(YEAR FROM inspection_date) DESC, 
			EXTRACT(MONTH FROM inspection_date) DESC,
			EXTRACT(DAY FROM inspection_date) DESC`,
        [userID],
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
// DONE
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc bao gồm thông tin chi tiết
// tất cả thông tin chi tiết ( nối ba bảng gồm: inspections, cars, car_owners)
exports.getInspectionAndOwnerPerID = (req, res) => {
    const inspectionID = req.params.inspection_id;
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT     i.inspection_id,
                    i.inspection_number,
                    i.inspection_date, 
                    i.expired_date, 
                    r.name AS registration_name,
                    u.phone AS user_phone,
                    u.email AS user_email, 
                    u.name AS user_name,
                    c.wheel_formula, 
                    c.wheel_tread,
                    c.overall_dimension, 
                    c.container_dimension,
                    c.length_base,
                    c.kerb_mass,
                    c.designed_and_authorized_payload,
                    c.designed_and_authorized_total_mass,
                    c.designed_and_authorized_towed_mass,
                    c.permissible_carry,
                    c.fuel,
                    c.engine_displacement,
                    c.maximum_output_to_rpm_ratio,
                    c.number_of_tires_and_tire_size,
                    c.number_plate,
                    c.registration_number,
                    c.registration_date,
                    c.type,
                    c.brand,
                    c.model_code,
                    c.engine_number,
                    c.chassis_number,
                    c.manufactured_year,
                    c.manufactured_country,
                    c.purpose,
                    c.recovered,
                    co.name AS owner_name,
                    co.address,
                    co.phone AS owner_phone,
                    co.email AS owner_email,
                    co.role
                    FROM inspections i 
                    INNER JOIN users as u ON i.user_id = u.user_id
                    INNER JOIN cars c ON c.car_id = i.car_id
                    INNER JOIN car_owners co ON co.owner_id = c.owner_id
                    INNER JOIN registration_centres r ON i.centre_id = r.centre_id
                    WHERE ${
                        queryString ? queryString : 1
                    } AND i.inspection_id = ?`,
        [inspectionID],
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

// Đưa ra số lượng đăng kiểm all
exports.countAllInspection = (req, res) => {
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT     COUNT(*) AS value
                    FROM inspections i 
                    WHERE ${queryString ? queryString : 1}`,
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
exports.createInspection = (req, res) => {
    const userID = req.body.userID; // You should include userID in the request body
    const centreID = req.body.centreID; // You should include centreID in the request body
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

            const first_time = countResult[0].count === 0 ? "true" : "false";

            connection.query(
                `SELECT type, manufactured_year FROM cars WHERE  number_plate = ?`,
                [number_plate],
                (carInfoErr, carInfoResult, carInfoFields) => {
                    let year = new Date().getFullYear();
                    if (carInfoErr) {
                        return res.status(500).json({
                            status: "Failed",
                            message: carInfoErr,
                        });
                    }
                    if (carInfoResult.length === 0) {
                        return res.status(404).json({
                            status: "Failed",
                            message:
                                "Car not found for the provided number_plate.",
                        });
                    }
                    const type = carInfoResult[0].type;
                    const manufactured_year =
                        carInfoResult[0].manufactured_year;

                    //specify
                    let speType;
                    if (
                        type === "Minivan" ||
                        type === "Pickup truck" ||
                        type === "Van"
                    ) {
                        speType = "truck_specializedCar";
                    } else {
                        speType = "carry_people";
                    }
                    let speCarry = "";
                    if (speType === "carry_people") {
                        speCarry = permissible_carry > 9 ? "$gt:9" : "$lte:9";
                    }
                    let spePurpose = "";
                    if (speCarry === "$lte:9") {
                        spePurpose = `-${purpose}`;
                        console.log(spePurpose);
                    }
                    let speManufactureAndTimePeriod = "";
                    if (speType === "carry_people") {
                        if (speCarry === "$lte:9") {
                            if (spePurpose === "-personal") {
                                if (year - manufactured_year <= 7)
                                    speManufactureAndTimePeriod =
                                        "+manufacture$lte:7~36~24";
                                else if (year - manufactured_year <= 20)
                                    speManufactureAndTimePeriod =
                                        "+manufacture$gt:7and$lte:20~12~12";
                                else
                                    speManufactureAndTimePeriod =
                                        "+manufacture$gt:20~6~6";
                            } else {
                                if (recovered)
                                    speManufactureAndTimePeriod =
                                        "+recovered~12~6";
                                else if (year - manufactured_year <= 5)
                                    speManufactureAndTimePeriod =
                                        "+manufacture$lte:5~24~12";
                                else
                                    speManufactureAndTimePeriod =
                                        "+manufacture$gt:5~6~6";
                            }
                        } else {
                            if (recovered)
                                speManufactureAndTimePeriod = "+recovered~12~6";
                            else if (year - manufactured_year <= 5)
                                speManufactureAndTimePeriod =
                                    "+manufacture$lte:5~24~12";
                            else if (year - manufactured_year <= 14)
                                speManufactureAndTimePeriod =
                                    "+manufacture$gt:5and$lte:14~6~6";
                            else
                                speManufactureAndTimePeriod =
                                    "+manufacture$gt:14~3~3";
                        }
                    } else {
                        if (recovered)
                            speManufactureAndTimePeriod = "+recovered~12~6";
                        else if (year - manufactured_year <= 7)
                            speManufactureAndTimePeriod =
                                "+manufacture$lte:7~24~12";
                        else if (year - manufactured_year <= 19)
                            speManufactureAndTimePeriod =
                                "+manufacture$gt:7and$lte:19~6~6";
                        else
                            speManufactureAndTimePeriod =
                                "+manufacture$gt:19~3~3";
                    }
                    const specify = `${speType}${speCarry}${spePurpose}${speManufactureAndTimePeriod}`;
                    //kthuc
                    connection.query(
                        `INSERT INTO inspections (inspection_id, inspection_number, inspection_date, car_id, user_id, centre_id, specify, first_time, expired_date)
    SELECT
        COALESCE(MAX(inspection_id), 0) + 1,
        
            CONCAT(
                YEAR(CURDATE()),"-", 
                LPAD(
                    (SELECT COUNT(*)  FROM inspections WHERE YEAR(inspection_date) = YEAR(CURDATE())), 6, '0'
                )
            ),
       
        ?,
        (SELECT car_id FROM cars WHERE number_plate = ?),
        ?, ?, ?, ?,
        ?
    FROM inspections`,
                        [
                            inspection_date,
                            number_plate,
                            userID,
                            centreID,
                            specify,
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
                                    designed_and_authorized_total_mass +
                                        " (kg)",
                                    designed_and_authorized_towed_mass +
                                        " (kg)",
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
                                        message:
                                            "Create inspection successfully",
                                        data: insertResult,
                                    });
                                }
                            );
                        }
                    );
                }
            );
        }
    );
};
