const express = require('express');
const router = express.Router({mergeParams: true});
const carController = require('../controllers/carController')
const authController = require('../controllers/authController')
const multer = require('multer');
const upload = multer({dest: 'uploads/xlsx/'});

router.use(authController.authenticateToken)

// add queries to filter car (id, model, number_plate)
router.get('/', carController.getCar)
router.get('/search', authController.restrictAccessTo("admin"), carController.searchCar)
router.get('/owner', authController.restrictAccessTo("admin"), carController.getOwner)

router.post('/upload', authController.restrictAccessTo("admin"), upload.single("file"), carController.upload)
router.get(
  "/number_plate", 
  authController.restrictAccessTo("staff"),
  carController.getAllNumberPlateAndRegistrationNumber
);

router.get("/:car_id", authController.restrictAccessTo("admin"), carController.getCarAndOwnerPerID);

module.exports = router;
