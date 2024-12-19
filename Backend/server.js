const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/iDan").then (() => {
    console.log("Database Connected to MongoDB")
}).catch((error) => {
    console.log(error)
})


const adminRoute = require("../Backend/Routes/AdminRouter")
const workerRoute = require("../Backend/Routes/WorkerRouter")
const requestRoute = require("../Backend/Routes/WorkerRequestRouter")
const MananagerResponse = require("../Backend/Routes/ManagerResponseRouter")

app.use(adminRoute)
app.use(workerRoute)
app.use(requestRoute)
app.use(MananagerResponse)

app.listen(7000, () => {
    console.log("Server is running on port 7000")
})