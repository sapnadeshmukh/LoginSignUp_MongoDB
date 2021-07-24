const User = require('../Models/User.model')
const Joi = require('joi')
const bcrypt=require("bcrypt")

const signup= async (req, res) => {
    const userSchema = Joi.object().keys({
        username:Joi.string().lowercase().min(3).max(15).required(),
        password: Joi.string().min(3).max(15).required(),
        gmail: Joi.string().email().lowercase().required(),
    })
    let data = {
        username : req.body.username,
        password:req.body.password,
        gmail:req.body.gmail
    }
    var validSchema = userSchema.validate(data)
    if(validSchema.error){
        res.status(400).send(validSchema.error.details[0].message);
    }else{
        const  salt=10;
        const hashPassword=await bcrypt.hash(req.body.password,salt)
        const userDetails = await User.find({});
        let i = 0;
        for (i of userDetails) {
            if (i["gmail"] == req.body.gmail ) {
                break;
            }
        } if (i["gmail"] == req.body.gmail ) {
            console.log("email already exist.")

            return res.status(208).send({message:"email already exists."})
        }else{
                const jsPlaylist = new User({
                username: req.body.username,
                password: hashPassword,
                gmail: req.body.gmail
                })
                const result = await jsPlaylist.save()
                console.log("You have Signup successfully")
                return res.status(200).send({message:"You have Signup successfully!!!"})
        }
    }
}
module.exports=signup
