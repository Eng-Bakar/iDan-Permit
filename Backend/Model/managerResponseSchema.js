const mongoose = require("mongoose")
const ManagerResponseSchema = mongoose.Schema({
    // fullName: {
    //     type: String,
    //     required: true
    // },
    // id: {
    //     type: String,
    //     required: true
    // },
    // title: {
    //     type: String,
    //     required: true
    // },
    // startDate: {
    //     type: Date,
    //     required: true
    // },
    // endDate: {
    //     type: Date,
    //     required: true
    // },
    // duration: {
    //     type: Number,
    //     required: true
    // },
    // destination: {
    //     type: String,
    //     required: true
    // },
    // reason:{
    //     type: String,
    //     required: true
    // },
    comment:{
        type: String,
        required: false
    },
    status:{
        type: String,
        // enum: ["pending", "approved", "rejected"],
        default: "pending",
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const ResponseSchema = mongoose.model("ManageResponse", ManagerResponseSchema)
module.exports = ResponseSchema