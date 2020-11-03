const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
    name: String,
    add: String,
    email: String
})

module.exports=mongoose.model("List", listSchema)
