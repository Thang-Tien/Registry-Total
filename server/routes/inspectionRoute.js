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
    "/stat/each_centre/count/mine/",
    authController.authenticateToken,
    inspectionController.countInspectionsOfMine
);
// Lấy ra tổng số lượng đăng kiểm của 12 tháng gần nhất CÓ ĐĂNG KIỂM của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/count/last_twelve_months/",
    authController.authenticateToken,
    inspectionController.countInspectionEachCenterLastTwelveMonths
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
    "/stat/each_centre/count/expired/month/",
    authController.authenticateToken,
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
    "/stat/each_centre/count/about_to_expired/month/",
    authController.authenticateToken,
    inspectionController.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth
);
// dự đoán số lượng xe đăng kiểm mới của mỗi trung tâm
// (xe đăng ký dự đoán ở tỉnh nào thì dự đoán số lượng xe đăng kiểm mới của trung tâm ở tỉnh đó)
router.get(
    "/stat/all_centre/prediction/about_to_inspect_of_each_centre/",
    authController.authenticateToken,
    inspectionController.predictAboutToInspectOfEachCentre
);

// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc
router.get(
    "/",
    authController.authenticateToken,
    inspectionController.getInspection
);
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc bao gồm thông tin chi tiết
// tất cả thông tin chi tiết ( nối ba bảng gồm: inspections, cars, car_owners)
router.get(
    "/get_inspection_owner/",
    authController.authenticateToken,
    inspectionController.getInspectionAndOwner
);
// Tạo đăng kiểm cho trung tâm mà staff đang làm việc
router.post(
    "/createInspection/",
    authController.authenticateToken,
    inspectionController.createInspection
);

module.exports = router;
