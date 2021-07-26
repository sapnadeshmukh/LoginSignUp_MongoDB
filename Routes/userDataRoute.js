const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/userData')


router.get('/', AuthController)
module.exports = router