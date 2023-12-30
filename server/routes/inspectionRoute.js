const express = require("express");
const router = express.Router({ mergeParams: true });
const inspectionController = require("../controllers/inspectionController");
const authController = require("../controllers/authController");
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/count/:centre_id",
    inspectionController.countInspectionsOfEachCentre
);
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/month/:centre_id",
    inspectionController.countInspectionsOfEachCentreThisMonth
);
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong năm này
router.get(
    "/stat/each_centre/count/year/:centre_id",
    inspectionController.countInspectionsOfEachCentreThisYear
);
router.get(
    "/stat/each_centre/count/mine/:user_id",
    inspectionController.countInspectionsOfMine
);
// Lấy ra tổng số lượng đăng kiểm của 12 tháng gần nhất CÓ ĐĂNG KIỂM của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/count/last_twelve_months/:centre_id",
    inspectionController.countInspectionEachCenterLastTwelveMonths
);

router.get(
    "/stat/each_centre/count/every_month/:centre_id",
    inspectionController.countInspectionEachCenterPerMonth
);
// DONE nhưng không liên quan
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc
router.get(
    "/stat/each_centre/count/expired/",
    authController.authenticateToken,
    inspectionController.countTotalExpiredInspectionsOfEachCentre
);
// DONE
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/expired/month/:centre_id",
    inspectionController.countTotalExpiredInspectionsOfEachCentreThisMonth
);
// DONE
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc (hiện tại <= ngày hết hạn <= hiện tại + 1 tháng)
router.get(
    "/stat/each_centre/count/about_to_expired/",
    authController.authenticateToken,
    inspectionController.countTotalAboutToExpiredInspectionsOfEachCentre
);
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/about_to_expired/month/:centre_id",
    inspectionController.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth
);
// dự đoán số lượng xe đăng kiểm mới của mỗi trung tâm
// (xe đăng ký dự đoán ở tỉnh nào thì dự đoán số lượng xe đăng kiểm mới của trung tâm ở tỉnh đó)
router.get(
    "/stat/all_centre/prediction/about_to_inspect_of_each_centre/",
    authController.authenticateToken,
    inspectionController.predictAboutToInspectOfEachCentre
);

// đưa ra tất cả inspection number và tên trung tâm đăng kiểm để search
router.get(
    "/inspection_number",
    inspectionController.getAllINspectionNumberAndCentreName
);
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc
router.get("/:centre_id", inspectionController.getInspectionPerCentreID);

// đưa ra 5 đăng kiểm gần nhất của trung tâm mà staff đang làm việc
router.get("/recently/:centre_id", inspectionController.getRecentlyInspection);

// đưa ra thông tin đăng kiểm của người dùng
router.get("/mine/:user_id", inspectionController.getMineInspection);
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc bao gồm thông tin chi tiết
// tất cả thông tin chi tiết ( nối ba bảng gồm: inspections, cars, car_owners)
router.get(
    "/get_inspection_owner/:inspection_id",
    inspectionController.getInspectionAndOwnerPerID
);
// Tạo đăng kiểm cho trung tâm mà staff đang làm việc
router.post("/createInspection/", inspectionController.createInspection);

module.exports = router;
