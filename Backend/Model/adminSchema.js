const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    id : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    telephone : {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    
})

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin 