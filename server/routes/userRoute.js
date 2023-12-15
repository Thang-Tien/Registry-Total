const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()

router.post('/login', authController.login)
router.post('/change-password', authController.authenticateToken, authController.changePassword)
router.post('/forgot-password', authController.handleForgotPassword)
router.post('/reset-password/:token', authController.resetPassword)
module.exports = router