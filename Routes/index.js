const express=require("express")
const router=express.Router()

router.use('/',require('./loginRoute'))
router.use('/',require('./signupRoute'))
router.use("/",require('./userDataRoute'))

module.exports=router