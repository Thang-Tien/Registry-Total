const express = require('express')
const router = express.Router({mergeParams: true})
const centreController = require('../controllers/centreController')
const authController = require('../controllers/authController')

router.use(authController.authenticateToken)
router.get('/count/total_centres',  centreController.totalNumberOfCentre)

router.get('/most_inspects', centreController.centresWithMostInspects)

// get centre, add queries ()
router.get('/', centreController.getCentre)

router.post('/add_centre', centreController.addCentre)
router.post('/update_centre/:centre_id', centreController.updateCentre)
router.post('/deactivate/:centre_id', centreController.deactivateCentre)

module.exports = router;