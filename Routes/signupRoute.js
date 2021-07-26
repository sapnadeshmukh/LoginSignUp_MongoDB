const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/signup')

router.post('/', AuthController)
module.exports = router