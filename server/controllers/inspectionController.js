const connection = require('../config/DBConnection')
const utils = require('../utils/utils')

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

exports.countInspectionsOfAllCentreByYear = async (req, res) => {
    let queryString = utils.generateQueryStringWithDate(req.query, 'inspection_date')
    connection.query(`SELECT MONTH(inspection_date) AS month, COUNT(*) AS total FROM inspections WHERE ${queryString ? queryString : 1} GROUP BY MONTH(inspection_date)`, 
    utils.getQueryValue(req.query), (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: 'Failed',
                 error: err
            })
        } else {
            return res.status(200).json({
                status: "Success",
                data: result
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
    connection.query(`SELECT COUNT(*) as total FROM cars WHERE inspected = false`, (err, result, fields) => {
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
