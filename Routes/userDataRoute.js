const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/userData')


router.get('/users', AuthController)
module.exports = router