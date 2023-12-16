// const connection = require("../config/DBConnection");
// const utils = require("../utils/utils");
// const PDFDocument = require("pdfkit");
// const fs = require("fs");
// exports.getInspection = (req, res) => {
// 	const inspection_number = req.params.inspection_number;
// 	let queryString = utils.generateQueryString(req.query);
// 	connection.query(
// 		`SELECT * FROM inspections
//                     WHERE ${
// 						queryString ? queryString : 1
// 					} AND inspection_number = ?`,
// 		[inspection_number],
// 		(err, result, fields) => {
// 			if (err) {
// 				return res.status(500).json({
// 					status: "Failed",
// 					message: err,
// 				});
// 			} else if (result.length == 0) {
// 				return res.status(404).json({
// 					status: "Failed",
// 					message: `Can't find inspection with ${utils.generateErrorQueryValue(
// 						req.query
// 					)}`,
// 				});
// 			} else {
// 				return res.status(200).json({
// 					status: "Success",
// 					data: result,
// 				});
// 			}
// 		}
// 	);
// };
