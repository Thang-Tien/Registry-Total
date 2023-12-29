const express = require('express');
const router = express.Router({mergeParams: true});
const carController = require('../controllers/carController')
const authController = require('../controllers/authController')
const multer = require('multer');
const upload = multer({dest: 'uploads/xlsx/'});

// add queries to filter car (id, model, number_plate)
router.get('/', carController.getCar)
router.post('/upload', upload.single("file"), carController.upload)

module.exports = router