const express = require('express')
const app = express()
 const dotenv= require("dotenv")
 const mongoose = require("mongoose")
 const cors = require("cors")


 dotenv.config()

 //connect to db
 mongoose.connect(process.env.DB_CONNECT,
 {useUnifiedTopology:true,useNewUrlParser:true},
 ()=>console.log("connected to db"))

//import routes
const listRoutes=require("./Routes/list")
const userRoutes=require("./Routes/user")

// //middlewares
 app.use(express.json())
 app.use(cors())

// route middlewares
app.use("/api/List",listRoutes)
app.use("/api/User",userRoutes)

app.listen(3000,()=>console.log('App listening on port 3000!'))
