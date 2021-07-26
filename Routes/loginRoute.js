const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/login.js')


router.get('/', AuthController)
module.exports = router