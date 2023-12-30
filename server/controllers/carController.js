const connection = require("../config/DBConnection");
const utils = require("../utils/utils");

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
