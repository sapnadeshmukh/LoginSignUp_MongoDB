const mongoose = require("mongoose");

const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,

    }
})

userSchema.pre("save",async function (next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(this.password,salt)
        this.password=hashPassword
        next()
    }catch(error){
        next(error)
    }
})

const User = mongoose.model('datas', userSchema)
module.exports = User;
