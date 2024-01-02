const express = require('express');
const router = express.Router({mergeParams: true});
const carController = require('../controllers/carController')
const authController = require('../controllers/authController')
const multer = require('multer');
const upload = multer({dest: 'uploads/xlsx/'});

//router.use(authController.authenticateToken)

// add queries to filter car (id, model, number_plate)
router.get('/', carController.getCar)
router.get('/search', carController.searchCar)
router.get('/owner', carController.getOwner)

router.post('/upload', upload.single("file"), carController.upload)
router.get(
  "/number_plate",
  carController.getAllNumberPlateAndRegistrationNumber
);

router.get("/:car_id", carController.getCarAndOwnerPerID);

module.exports = router;
