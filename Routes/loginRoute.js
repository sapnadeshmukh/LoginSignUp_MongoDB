const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/login.js')


router.get('/login', AuthController)
module.exports = router