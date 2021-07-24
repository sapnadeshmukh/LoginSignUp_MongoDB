const express = require('express')
const app=express();
app.use(express.json())

const database=require('./Database/connection.js')
const port = process.env.PORT;
app.use("/",require('./Routes'))


app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})