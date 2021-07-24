const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/signup')

router.post('/signup', AuthController)
module.exports = router