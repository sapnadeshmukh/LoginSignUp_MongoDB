const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/Auth.Controller.js')

router.post('/signup', AuthController.signup)

router.get('/login', AuthController.login)



module.exports = router