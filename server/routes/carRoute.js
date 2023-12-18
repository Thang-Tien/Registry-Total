const express = require('express');
const router = express.Router({mergeParams: true});
const carController = require('../controllers/carController')
const authController = require('../controllers/authController')

// add queries to filter car (id, model, number_plate)
router.get('/', carController.getCar)


module.exports = router