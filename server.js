// packages
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const routes = require('./routes/routes')
// app func
const app = express()
app.use(express.json())

// Database connection
mongoose.connect(process.env.MONGO_URL)
const database = mongoose.connection

// database error connections
database.on('error', (error) => {
    console.log("database not connected", error);
})

// database connected
database.on('connected', () => {
    console.log("database connected successfully");
})

// use the Routes file 
app.use('/customer', routes)

// port listening
app.listen(process.env.PORT, () => {
    console.log("port running : " + process.env.PORT);
})

// www.sdcsd.com/customer