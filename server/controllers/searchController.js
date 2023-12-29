const connection = require("../config/DBConnection");
const utils = require("../utils/utils");
const PDFDocument = require("pdfkit");
const fs = require("fs");
//search số đăng kiểm
exports.getInspectionByInspectionNumber = async (req, res) => {
	const inspection_number = req.body.inspection_number; // Extract inspection_number from the URL

	connection.query(
		`SELECT * FROM inspections
                    WHERE inspection_number LIKE ?`,
		[`%${inspection_number}%`],
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
//search biển số xe
exports.getInspectionByNumberPlate = async (req, res) => {
	const number_plate = req.body.number_plate; // Extract number_plate from the URL

	connection.query(
		`SELECT * FROM cars
                    WHERE number_plate LIKE ?`,
		[`%${number_plate}%`],
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
