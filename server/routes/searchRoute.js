const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", authController.login);
router.post(
	"/change-password",
	authController.authenticateToken,
	authController.changePassword
);
router.post("/forgot-password", authController.handleForgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post(
	"/update_info",
	authController.authenticateToken,
	authController.restrictAccessTo(["admin", "staff"]),
	userController.changeUserInfo
);

module.exports = router;
