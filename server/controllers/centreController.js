const connection = require('../config/DBConnection')
const utils = require('../utils/utils')

exports.totalNumberOfCentre = (req, res) => {
    connection.query('SELECT COUNT(*) FROM registration_centres', (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            return res.status(200).json({
                status: 'Success',
                data: result
            })
        }
    })
}

exports.centresWithMostInspects = async (req, res) => {
    connection.query(`SELECT r.centre_id, r.name, COUNT(i.centre_id) as total_inspection FROM inspections i INNER JOIN registration_centres r ON i.centre_id = r.centre_id  GROUP BY r.centre_id ORDER BY total_inspection DESC LIMIT ${req.query.limit ? req.query.limit : 5}`,
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: result
                })
            }
        })
}

exports.getCentre = (req, res) => {
    connection.query(`SELECT * FROM registration_centres WHERE ${utils.generateQueryString(req.query) ? utils.generateQueryString(req.query) : 1}`, utils.getQueryValue(req.query),
        (err, result, fields) => { 
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err
                })
            } else if (result.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    message: `Can't find centre with ${utils.generateErrorQueryValue(req.query)}`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: result
                })
            }
        })
}



