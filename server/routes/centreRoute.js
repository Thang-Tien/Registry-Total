const express = require('express')
const router = express.Router({mergeParams: true})
const centreController = require('../controllers/centreController')
const authController = require('../controllers/authController')

router.use(authController.authenticateToken)

router.get('/count/total_centres', authController.restrictAccessTo("admin"), centreController.totalNumberOfCentre)

router.get('/most_inspects', authController.restrictAccessTo("admin"), centreController.centresWithMostInspects)

// get centre, add queries ()
router.get('/', authController.restrictAccessTo("admin"), centreController.getCentre)
router.get('/staff/:centre_id', authController.restrictAccessTo("admin"), centreController.getStaffByCentre)

router.post('/add_centre', authController.restrictAccessTo("admin"), centreController.addCentre)
router.post('/update_centre/:centre_id', authController.restrictAccessTo("admin"), centreController.updateCentre)
router.post('/deactivate/:centre_id', authController.restrictAccessTo("admin"), centreController.deactivateCentre)

module.exports = router;
