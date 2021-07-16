const express = require('express')
const app=express();
app.use(express.json())

const database=require('./Database/connection.js')
const port = 4560;
const route = require('./Routes/Auth.route.js')

app.use(route)
app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})