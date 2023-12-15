const connection = require('../config/DBConnection')
const utils = require('../utils/utils')

exports.getCarFromId = async (req, res) => {
    connection.query('SELECT * FROM cars WHERE car_id = ?', req.params.carId, (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            if (results.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    error: `Không tìm thấy xe với id = ${req.params.carId}`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: results
                })
            }
        }
    })

}

exports.getCar = async (req, res) => {
    let queryString = utils.generateQueryString(req.query);
    connection.query(`SELECT * FROM cars WHERE ${queryString ? queryString : 1}`, utils.getQueryValue(req.query), (err, results, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            if (results.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    error: `Không tìm thấy xe với ${utils.generateErrorQueryValue(req.query)}`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: results
                })
            }
        }
    })

}