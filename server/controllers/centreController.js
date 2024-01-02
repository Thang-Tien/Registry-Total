const connection = require('../config/DBConnection')
const utils = require('../utils/utils')
const province = require('../utils/provinces')


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
    connection.query(`SELECT r.centre_id, r.name, COUNT(i.centre_id) as total_inspection FROM inspections i INNER JOIN registration_centres r ON i.centre_id = r.centre_id WHERE r.active = 1 GROUP BY r.centre_id ORDER BY total_inspection DESC LIMIT ${req.query.limit ? req.query.limit : 5}`,
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
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

exports.getCentre = (req, res) => {
    connection.query(`SELECT * FROM registration_centres WHERE ${utils.generateQueryString(req.query) ? utils.generateQueryString(req.query) : 1} AND active = 1`, utils.getQueryValue(req.query),
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    error: err
                })
            } else if (result.length == 0) {
                return res.status(500).json({
                    status: "Failed",
                    error: `Can't find centre with ${utils.generateErrorQueryValue(req.query)} OR centre is inactive`
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    data: result
                })
            }
        })
}

// body field: name, address, phone, email
exports.addCentre = (req, res) => {
    const area = province.mappingProvinceToArea(req.body.address)
    const side = province.mappingProvinceToSide(req.body.address)

    connection.query(`SELECT * FROM registration_centres WHERE email = "${req.body.email}"`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        }
        console.log(result)
        if (result[0]) {
            return res.status(400).json({
                status: "Failed",
                error: `Email ${req.body.email} already exist`
            })
        } else {
            connection.query(`INSERT INTO registration_centres (name, address, phone, email, created_at, active, role, side, area) VALUES (?, ?, ?, ?, NOW(), true, "registry-branch", ?, ?)`,
                [req.body.name, req.body.address, req.body.phone, req.body.email, side, area],
                (err, result, fields) => {
                    if (err) {
                        return res.status(500).json({
                            status: "Failed",
                            error: err
                        })
                    } else {
                        return res.status(200).json({
                            status: "Success",
                            message: "Insert new centre successfully"
                        })
                    }

                }
            )
        }

    })

}

exports.updateCentre = (req, res) => {
    const area = province.mappingProvinceToArea(req.body.address)
    const side = province.mappingProvinceToSide(req.body.address)

    connection.query(`UPDATE registration_centres SET name = ?, address = ?, phone = ?, email = ?, created_at = NOW(), active = true, role = "registry-branch", side = ?, area = ? WHERE centre_id = ${req.params.centre_id}`,
        [req.body.name, req.body.address, req.body.phone, req.body.email, side, area],
        (err, result, fields) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    error: err
                })
            } else {
                return res.status(200).json({
                    status: "Success",
                    message: "Update centre successfully"
                })
            }

        }
    )
}

exports.deactivateCentre = (req, res) => {
    connection.query(`UPDATE registration_centres SET active = false WHERE centre_id = ${req.params.centre_id}`, (err, result, fields) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else {
            connection.query(`UPDATE users SET active = false WHERE centre_id = ${req.params.centre_id}`, (err, result, fields) => {
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        error: err
                    })
                } else {
                    return res.status(200).json({
                        status: "Success",
                        mesage: "Deactivate centre and its staffs successfully"
                    })
                }

            })
        }
    })
}


exports.getStaffByCentre = (req, res) => {
    connection.query(`SELECT * FROM users WHERE centre_id = ${req.params.centre_id} AND active = true`, (err, result, fields) => {

        if (err) {
            return res.status(500).json({
                status: "Failed",
                error: err
            })
        } else if (result.length == 0) {
            return res.status(400).json({
                status: "Failed",
                error: `Centre with centre_id = ${req.params.centre_id} doesn't exist or centre has no active user`
            })
        }
        else {
            return res.status(200).json({
                status: "Success",
                data: result
            })
        }

    })
}
