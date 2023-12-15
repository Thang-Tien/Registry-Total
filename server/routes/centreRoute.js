const express = require('express')
const router = express.Router({mergeParams: true})
const centreController = require('../controllers/centreController')
const authController = require('../controllers/authController')

router.get('/count/total_centres', 
    centreController.totalNumberOfCentre)

router.get('/most_inspects', 
    centreController.centresWithMostInspects)

router.get('/', 
    centreController.getCentre)

module.exports = router;