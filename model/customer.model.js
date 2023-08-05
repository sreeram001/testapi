const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name : {
        type:String
    },

    age : {
        type:String
    },

    mobile_number : {
        type:String
    },

    email : {
        type:String
    }
})

module.exports = mongoose.model("customer",customerSchema)