require("dotenv").config()
const mongoose = require("mongoose")
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {MONGODBURI} = process.env


///Create Connection

mongoose.connect(MONGODBURI, config)

//DB Events

mongoose.connection 
.on("open", ()=> console.log("You re connected to Mongo"))
.on("close", ()=> console.log("Mongo connection closed"))
.on("error", (error)=> console.log(error))

module.exports = mongoose

