const User = require('../Models/User.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtToken = require("../middlewares/token")

const login = async (req, res) => {
    const userDetails = await User.findOne({ gmail: req.body.gmail });
    if (userDetails == null) {
        console.log("Invalid gmail!!!")
        return res.status(404).json({
            message: "Invalid Gmail ",
            status: 404
        })
    } else {
        const plainPassword = req.body.password
        const hashedPassword = userDetails.password

        const comparePassword = await bcrypt.compare(plainPassword, hashedPassword)
        if (comparePassword) {
            const data = { gmail: userDetails.gmail }
            const token = jwtToken(data, process.env.SECRETKEY)
            // console.log(token)
            return res.status(200).send({
                message: "You have logged in successfully!!!",
                status: 200,
                tokenData: token
            })
        } else {
            console.log("Invalid user")
            return res.status(401).send("Invalid user")
        }
    }
}

module.exports = login