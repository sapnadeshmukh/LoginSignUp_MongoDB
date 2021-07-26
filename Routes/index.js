const express=require("express")
const router=express.Router()

router.use('/login',require('./loginRoute'))
router.use('/signup',require('./signupRoute'))
router.use('/users',require('./userDataRoute'))

module.exports=router