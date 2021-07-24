const User = require('../Models/User.model')

const userData = async (req, res) => {
    const userDetails = await User.find();
    if (userDetails.length == 0){
        return res.status(404).json({
            message:"No data found!!!",
            status:404
        })

    }
    else{
        return res.status(200).json({
            message:"got data!!!",
            status:200,
            data: userDetails})


    }
}

module.exports = userData

