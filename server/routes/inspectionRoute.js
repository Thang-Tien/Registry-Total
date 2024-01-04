const express = require("express");
const router = express.Router({ mergeParams: true });
const inspectionController = require("../controllers/inspectionController");
const authController = require("../controllers/authController");

router.use(authController.authenticateToken)

// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/info/:centre_id",
    inspectionController.countInspectionsOfEachCentre
);
//router.use(authController.authenticateToken)
// add queries to filter inspections to count
router.get(
    "/stat/all_centre/count/",
    authController.restrictAccessTo("admin"),
    inspectionController.countInspectionsOfAllCentre
);

router.get(
    "/stat/:centre_id/count/",
    authController.restrictAccessTo("admin"),
    inspectionController.countInspectionsOfACentre
);

router.get(
    "/stat/all_centre/count/every_month/",
    authController.restrictAccessTo("admin"),
    inspectionController.countInspectionsOfAllCentreEveryMonth
);

// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc
router.get("/info/:centre_id", inspectionController.getInspectionPerCentreID);

router.get(
    "/stat/:centre_id/count/every_month",
    authController.restrictAccessTo("admin"),
    inspectionController.countInspectionsOfACentreEveryMonth
);

router.get(
    "/stat/all_centre/count/by_year",
    authController.restrictAccessTo("admin"),
    inspectionController.countInspectionsOfAllCentreByYear
);

router.get(
    "/stat/all_centre/count/expired",
    authController.restrictAccessTo("admin"),
    inspectionController.countTotalExpiredInspectionsOfAllCentre
);

router.get(
    "/stat/all_centre/count/about_to_expired",
    authController.restrictAccessTo("admin"),
    inspectionController.countTotalAboutToExpiredInspectionsOfAllCentre
);

router.get(
    "/stat/all_centre/prediction/about_to_inspect",
    authController.restrictAccessTo("admin"),
    inspectionController.predictAboutToInspect
);

router.get('/', authController.restrictAccessTo("admin"), inspectionController.getInspection)

router.get("/search", authController.restrictAccessTo("admin"), inspectionController.searchInspection);

// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/count/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionsOfEachCentre
);
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/month/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionsOfEachCentreThisMonth
);
// đếm tổng số lượng đăng kiểm của centre mà staff đang làm việc trong năm này
router.get(
    "/stat/each_centre/count/year/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionsOfEachCentreThisYear
);
router.get(
    "/stat/each_centre/count/mine/:user_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionsOfMine
);
// Lấy ra tổng số lượng đăng kiểm của 12 tháng gần nhất CÓ ĐĂNG KIỂM của centre mà staff đang làm việc
router.get(
    "/stat/each_centre/count/last_twelve_months/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionEachCenterLastTwelveMonths
);

router.get(
    "/stat/each_centre/count/every_month/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countInspectionEachCenterPerMonth
);
// DONE nhưng không liên quan
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc
router.get(
    "/stat/each_centre/count/expired/",
    authController.restrictAccessTo("staff"),
    inspectionController.countTotalExpiredInspectionsOfEachCentre
);
// DONE
// đếm tổng số lượng đăng kiểm đã hết hạn của trung tâm mà staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/expired/month/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countTotalExpiredInspectionsOfEachCentreThisMonth
);
// DONE
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc (hiện tại <= ngày hết hạn <= hiện tại + 1 tháng)
router.get(
    "/stat/each_centre/count/about_to_expired/",
    authController.restrictAccessTo("staff"),
    inspectionController.countTotalAboutToExpiredInspectionsOfEachCentre
);
// đếm tổng số lượng đăng kiểm sắp hết hạn của các trung tâm staff đang làm việc trong tháng này
router.get(
    "/stat/each_centre/count/about_to_expired/month/:centre_id",
    authController.restrictAccessTo("staff"),
    inspectionController.countTotalAboutToExpiredInspectionsOfEachCentreThisMonth
);
// dự đoán số lượng xe đăng kiểm mới của mỗi trung tâm
// (xe đăng ký dự đoán ở tỉnh nào thì dự đoán số lượng xe đăng kiểm mới của trung tâm ở tỉnh đó)
router.get(
    "/stat/all_centre/prediction/about_to_inspect_of_each_centre/",
    authController.restrictAccessTo("staff"),
    inspectionController.predictAboutToInspectOfEachCentre
);

router.get("/stat/total/", authController.restrictAccessTo("staff"),inspectionController.countAllInspection);
// đưa ra tất cả inspection number và tên trung tâm đăng kiểm để search
router.get(
    "/inspection_number",
    authController.restrictAccessTo("staff"),
    inspectionController.getAllINspectionNumberAndCentreName
);

// đưa ra 5 đăng kiểm gần nhất của trung tâm mà staff đang làm việc
router.get("/recently/:centre_id", inspectionController.getRecentlyInspection);

// đưa ra thông tin đăng kiểm của người dùng
router.get("/mine/:user_id", authController.restrictAccessTo("staff"), inspectionController.getMineInspection);
// đưa ra thông tin đăng kiểm của trung tâm mà staff đang làm việc bao gồm thông tin chi tiết
// tất cả thông tin chi tiết ( nối ba bảng gồm: inspections, cars, car_owners)
router.get(
    "/get_inspection_owner/:inspection_id",
    authController.restrictAccessTo("staff"),
    inspectionController.getInspectionAndOwnerPerID
);
// Tạo đăng kiểm cho trung tâm mà staff đang làm việc
router.post("/createInspection/", authController.restrictAccessTo("staff"), inspectionController.createInspection);

module.exports = router;
