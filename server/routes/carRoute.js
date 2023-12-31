const express = require("express");
const router = express.Router({ mergeParams: true });
const carController = require("../controllers/carController");
const authController = require("../controllers/authController");

router.get(
    "/number_plate",
    carController.getAllNumberPlateAndRegistrationNumber
);

router.get("/:car_id", carController.getCarAndOwnerPerID);

module.exports = router;
