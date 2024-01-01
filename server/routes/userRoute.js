const express = require('express')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/login', authController.login)
router.post('/change-password',  authController.changePassword)
router.post('/forgot-password', authController.handleForgotPassword)

router.post('/check-otp', authController.checkOTP)
router.patch('/reset-password', authController.resetPassword)

router.post('/create_account', userController.createUser)
router.post('/delete_account',  userController.deleteUser)
router.post('/update_info', authController.authenticateToken, userController.changeUserInfo)

router.get('/', userController.getUser)

module.exports = router
