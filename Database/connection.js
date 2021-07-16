const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Sapna:Sapna@2104@cluster0.t8a1a.mongodb.net/DB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true })
    .then(() => console.log("Successfully connected to database"))
    .catch((err) => console.log("database connection failed. exiting now.."));
