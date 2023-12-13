const express = require("express");
const router = express.Router({ mergeParams: true });
const inspectionController = require("../controllers/inspectionController");
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
router.get(
	"/stat/each_centre/count/:centreId",
	inspectionController.countInspectionsOfEachCentre
);
// DONE nhưng không liên quan
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc
router.get(
	"/stat/each_centre/count/expired/:centreId",
	inspectionController.countTotalExpiredInspectionsOfEachCentre
);
// DONE
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc trong tháng này
router.get(
	"/stat/each_centre/count/expired/month/:centreId",
	inspectionController.countTotalExpiredInspectionsOfEachCentreThisMonth
);
// DONE
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc (hiện tại <= ngày hết hạn <= hiện tại + 1 tháng)
router.get(
	"/stat/each_centre/count/about_to_expired/:centreId",
	inspectionController.countTotalAboutToExpiredInspectionsOfEachCentre
);
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc trong tháng này
router.get(
	"/stat/each_centre/count/about_to_expired/month/:centreId",
	inspectionController.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth
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
