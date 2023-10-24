const express = require('express');
const router = express.Router({mergeParams: true});
const carController = require('../controllers/carController')
const authController = require('../controllers/authController')

router.get('/', authController.authenticateToken, carController.getCar)


module.exports = router