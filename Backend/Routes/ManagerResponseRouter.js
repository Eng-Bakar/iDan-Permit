const express = require("express")
const Response = express.Router()
const ManagerResponseSchema = require("../Model/managerResponseSchema")

// Response.post("/manager/response/:_id", async (req, res) => {
//     const newResponse = ManagerResponseSchema(req.body)
//     const saveResponse = await newResponse.save()
//     if (saveResponse){
//         res.send("Response has been sent successfully")
//     }
// })

Response.post("/CreateStatus", async (req, res) => {
    const newStatus =  ManagerResponseSchema(req.body)
    const saveStatus = await newStatus.save()
    if (saveStatus){
        res.send("Resposne status send successfully")
    }
})

Response.put("/UpdateStatus", async (req, res) => {
    const {status}  = req.body //should be approved or rejected
    const StatusUpdate = await findByIdAndUpdate(req.params.ID)
    if (StatusUpdate){
        StatusUpdate.status = req.body.status
        await StatusUpdate.save()
        res.send("Status has been updated successfully")
    }
    else {
        res.send("Status not updated")
    }
})

module.exports = Response