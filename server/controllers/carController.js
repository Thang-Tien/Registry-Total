const connection = require('../config/DBConnection')
const utils = require('../utils/utils')
const xlsxToJson = require('../utils/xlsx')

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