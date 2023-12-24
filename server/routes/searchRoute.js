const express = require("express");
const router = express.Router({ mergeParams: true });
const searchController = require("../controllers/searchController");
router.get(
	"/inspection_number/:inspection_number",
	searchController.getInspectionByInspectionNumber
);
router.get(
	"/number_plate/:number_plate",
	searchController.getInspectionByNumberPlate
);
module.exports = router;
