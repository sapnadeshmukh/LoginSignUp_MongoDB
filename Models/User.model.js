const mongoose = require("mongoose");

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
const User = mongoose.model('datas', userSchema)
module.exports = User;

