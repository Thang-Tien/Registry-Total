const express = require('express')
const router = express.Router({mergeParams: true})
const inspectionController = require('../controllers/inspectionController')
const authController = require('../controllers/authController')

//router.use(authController.authenticateToken)
// add queries to filter inspections to count
router.get('/stat/all_centre/count/', 
    inspectionController.countInspectionsOfAllCentre)

router.get('/stat/all_centre/count/expired', 
    inspectionController.countTotalExpiredInspectionsOfAllCentre)

router.get('/stat/all_centre/count/about_to_expired', 
    inspectionController.countTotalAboutToExpiredInspectionsOfAllCentre)

router.get('/stat/all_centre/prediction/about_to_inspect', 
    inspectionController.predictAboutToInspect)
    
// add queries to filter inspection
router.get('/', 
    inspectionController.getInspection)

module.exports = router

