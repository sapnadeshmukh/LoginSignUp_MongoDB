const User = require('../Models/User.model')


module.exports = {
    signup: async (req, res, next) => {
        const getDocument = async () => {
            const userDetails = await User.find({});
            let i = 0;
            for (i of userDetails) {
                if (i["gmail"] == req.body.gmail ) {
                    break;
                }
            } if (i["gmail"] == req.body.gmail ) {
                res.send("email already exist.")
                console.log("email already exist.")
            } else {
                const createDocument = async () => {
    
                    const jsPlaylist = new User({
                        username: req.body.username,
                        password: req.body.password,
                        gmail: req.body.gmail
    
                    })
                    const result = await jsPlaylist.save()
                    res.send(" You have Signup successfully!!!")
                    console.log("You have Signup successfully!!!")
                }
                createDocument();
            }
        }
        getDocument()
    },
    login: async (req, res, next) => {
        const getDocument = async () => {
            const userDetails = await User.find({});
            const user = ({
                username: req.body.username,
                password: req.body.password,
                gmail: req.body.gmail
            })
            let i = 0;
            for (i of userDetails) {
                if (i["gmail"] == req.body.gmail) {
                    break;
                }
            } if (i["gmail"] == req.body.gmail ) {
                res.send("You have logged in successfully!!!")
                console.log("You have logged in successfully!!!")
            }else{
                res.send("Invalid user")
                console.log("Invalid user")
            }
        }
        getDocument();
    }
}

