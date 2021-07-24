const mongoose = require("mongoose");
const detenv=require("dotenv").config()


var DatabaseURL=process.env.MONGODB_URL
mongoose.connect(DatabaseURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true })
    .then(() => console.log("Successfully connected to database"))
    .catch((err) => console.log("database connection failed. exiting now.."));
