const mongoose = require("mongoose");
const express = require("express");
const { request } = require("express");
const app = express();
app.use(express.json())
const port = 4560;

mongoose.connect("mongodb+srv://Sapna:Sapna@2104@cluster0.t8a1a.mongodb.net/DB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successfully..."))
    .catch((err) => console.log(err));


//create schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        lowercase: true,
        uppercase: true,
        required: true
    },
    gmail: {
        type: String,
        lowercase: true,
        uppercase: true,
        required: true

    }
})


// create model...
const collection = new mongoose.model("datas", userSchema);



app.post("/signup", (req, res) => {
    const getDocument = async () => {
        const userDetails = await collection.find({});
        const user = ({
            username: req.body.username,
            password: req.body.password,
            gmail: req.body.gmail
        })
        let i = 0;
        for (i of userDetails) {
            if (i["gmail"] == req.body.gmail && i["password"] == req.body.password) {
                break;
            }
        } if (i["gmail"] == req.body.gmail && i["password"] == req.body.password) {
            res.send("user already exist")
            console.log("user already exist")
        } else {
            const createDocument = async () => {

                const jsPlaylist = new collection({
                    username: req.body.username,
                    password: req.body.password,
                    gmail: req.body.gmail

                })
                const result = await jsPlaylist.save()
                res.send("your sign up successfully...")
                console.log("your sign up successfully...")
            }
            createDocument();
        }
    }
    getDocument()
});

app.get("/login",(req,res)=>{
    const getDocument = async () => {
        const userDetails = await collection.find({});
        const user = ({
            username: req.body.username,
            password: req.body.password,
            gmail: req.body.gmail
        })
        let i = 0;
        for (i of userDetails) {
            if (i["gmail"] == req.body.gmail && i["password"] == req.body.password) {
                break;
            }
        } if (i["gmail"] == req.body.gmail && i["password"] == req.body.password) {
            res.send("log in successfully")
            console.log("log in successfully")
        }else{
            res.send("Invalid user")
            console.log("Invalid user")
        }
    }
    getDocument();
})



app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})




















