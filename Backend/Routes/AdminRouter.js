const express = require('express');

const Admin = express.Router();
const AdminSchema = require("../Model/adminSchema")


Admin.post("/admin/create", async (req,res) => {
    const newAdmin =  AdminSchema(req.body)
    const saveAdmin = await newAdmin.save()
    if (saveAdmin){
        res.send("Admin has created successfully")
    }
})


Admin.get("/Admin/read", async (req, res) => {
    const AllAdmins = await AdminSchema.find()
    res.send(AllAdmins)
})

Admin.get("/Admin/SingleAdmin/:id", async (req,res) => {
    const SingleAdmin = await AdminSchema.findOne({_id: req.params.id})
    if (SingleAdmin){
        res.send(SingleAdmin)
    }
})

Admin.put("/Admin/update/:id", async (req, res) => {
    const AdminUpdate = await AdminSchema.updateOne({_id:req.params.id},
        {
            $set:{
                name: req.body.name, //name ka hore waa from the schema
                id: req.body.id,
                title: req.body.title,
                email: req.body.email,
                telephone: req.body.telephone,
                password: req.body.password,
            }
        }
    )
    if (AdminUpdate){
        res.send("Admin has updated successfully")
    }
})

Admin.delete("/admin/delete/:id", async (req, res) => {
    const AdminDelete = await AdminSchema.deleteOne({_id: req.params.id})
    if (AdminDelete){
        res.send("Admin has deleted successfully")
    }
})


//An API that get the ID and Password of the Admin

Admin.post("/admin/login", async (req, res) => {
    if (req.body.id && req.body.password) {
        const admin  = await AdminSchema.findOne(req.body)
        if (admin){
            res.send ({success: "Admin has been login successfully", admin})
        }
        else {
            res.send ({error: "Incorrect id or password"})
        }
    }
    else {
        res.send ({empty: "ID and Password are required"})
    }
})
module.exports = Admin