const express = require("express");
const Request = express.Router();
const WorkerRequestSchema = require("../Model/WorkerRequestSchema"); // Worker Request Schema
const WorkerSchema = require("../Model/WorkerSchema"); // Worker Schema for authentication

// Creating request from employees
Request.post("/new/request", async (req, res) => {
    const newRequest = WorkerRequestSchema(req.body)
    const saveRequest = await newRequest.save()
    if(saveRequest){
        res.send({
            massage: "Request has been saved",
            data: saveRequest
        })
    }
    else {
        res.send({
            error: "Request has not saved"
        })
    }
})

// Waa meesha laga go'aan loogu gaaraayaao qofka fasax rabo
Request.put("/update/status/:ID", async (req, res) => {
    const status = await WorkerRequestSchema.updateOne(
        {ID: req.params.ID},
        {status: req.body.status})
        if(status){
            res.send({
                message: "Status has been updated",
                data: status
            })
        }
})





Request.get("/requests/read", async (req, res) => {
    const allRequests = await WorkerRequestSchema.find();
    res.send(allRequests);
});

// Soo bandhig xogta user uu leeyahay kaliye

// Route to get a single request by its ID
Request.get("/request/SingleRead/:ID", async (req, res) => {
    const singleRequest = await WorkerRequestSchema.find({ID: req.params.ID });
    if (singleRequest) {
        res.send(singleRequest);
    } else {
        res.send("Request not found.");
    }
});

//Route in the WorkerViewBox 
Request.get("/request/:ID", async (req, res) => {
    const singleRequest = await WorkerRequestSchema.findOne({ ID: req.params.ID });
    if (singleRequest) {
        res.send(singleRequest);
    } else {
        res.send("Request not found.");
    }
});

// Route to delete a request by its ID
Request.delete("/requests/delete/:id", async (req, res) => {
    const deleteRequest = await WorkerRequestSchema.deleteOne({_id: req.params.id});
    if (deleteRequest) {
        res.send("Request has been deleted successfully");
    } else {
        res.send("Request not found.");
    }
});

// router.delete("/delete/product/:id" , async(req, res)=>{
//     const deleteProduct = await productModel.deleteOne({_id: req.params.id})
//     if (deleteProduct){
//         res.send("Product has been deleted successfully")
//     }
// })

module.exports = Request;
