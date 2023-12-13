const express = require("express");
const router = express.Router({ mergeParams: true });
const inspectionController = require("../controllers/inspectionController");

router.get(
	"/stat/each_centre/count/:centreId",
	inspectionController.countInspectionsOfEachCentre
);
router.get(
	"/stat/each_centre/count/expired/:centreId",
	inspectionController.countTotalExpiredInspectionsOfEachCentre
);
router.get(
	"/stat/each_centre/count/expired/month/:centreId",
	inspectionController.countTotalExpiredInspectionsOfEachCentreThisMonth
);
router.get(
	"/stat/each_centre/count/about_to_expired/:centreId",
	inspectionController.countTotalAboutToExpiredInspectionsOfEachCentre
);
router.get(
	"/stat/all_centre/prediction/about_to_inspect_of_each_centre/:centreId",
	inspectionController.predictAboutToInspectOfEachCentre
);
router.get("/:centreId", inspectionController.getInspection);
router.get(
	"/get_inspection_owner/:centreId",
	inspectionController.getInspectionAndOwner
);

module.exports = router;
