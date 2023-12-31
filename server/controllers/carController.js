const connection = require("../config/DBConnection");
const utils = require("../utils/utils");
const xlsxToJson = require('../utils/xlsx')


exports.getAllNumberPlateAndRegistrationNumber = (req, res) => {
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT car_id, number_plate, registration_number FROM cars`,
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err,
                });
            } else if (result.length == 0) {
                return res.status(404).json({
                    status: "Failed",
                    message: `Can't find cars with ${utils.generateErrorQueryValue(
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

exports.getCarAndOwnerPerID = (req, res) => {
    const carID = req.params.car_id;
    let queryString = utils.generateQueryString(req.query);
    connection.query(
        `SELECT c.car_id,
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
        co.name AS owner_name,
        co.address,
        co.phone,
        co.email,
        co.role
	FROM cars c
	INNER JOIN car_owners co ON co.owner_id = c.owner_id
	WHERE ${queryString ? queryString : 1} AND c.car_id = ?`,
        [carID],
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

exports.getCarFromId = async (req, res) => {
    connection.query('SELECT * FROM cars WHERE car_id = ?', req.params.carId, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            if (result.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    error: `Không tìm thấy xe với id = ${req.params.carId}`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: result
                })
            }
        }
    })

}

exports.getCar = async (req, res) => {
    let queryString = utils.generateQueryString(req.query);
    connection.query(`SELECT * FROM cars WHERE ${queryString ? queryString : 1}`, utils.getQueryValue(req.query), (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            if (result.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    error: `Không tìm thấy xe với ${utils.generateErrorQueryValue(req.query)}`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: result
                })
            }
        }
    })
}

exports.upload = (req, res) => {
    console.log(req.file.path)
    const data = xlsxToJson(req.file.path)
    console.log(data)
    console.log(utils.getFieldsFromXlsx(data[0]))
    console.log(utils.generateQueryFromXlsx(data))
    connection.query(`INSERT INTO cars ${utils.getFieldsFromXlsx(data[0])} VALUES ${utils.generateQueryFromXlsx(data)}`,
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    error: err
                })
            }
            else {
                return res.status(200).json({
                    status: "Success",
                    message: "Import successfully"
                })
            }
        })
}