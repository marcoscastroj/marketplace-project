const mongoose = require("mongoose")

require("express-async-errors")

const cors = require('cors')

const errorHandle = require("./middlewares/errorHandle")

const authRouter = require("./routes/authRouter")
const carRouter = require("./routes/carRouter")
const clientRouter = require("./routes/clientRouter")
const employeeRouter = require("./routes/employeeRouter")

const productRouter = require("./routes/productRouter")

mongoose.connect("mongodb://127.0.0.1:27017/market")

const express = require("express")

const app = express()

app.use(express.json())

app.use(cors())

app.use(authRouter)
app.use(carRouter)
app.use(clientRouter)
app.use(employeeRouter)
app.use(productRouter)

app.use(errorHandle)

app.listen(3003,()=>{
    console.log("Iniciando servidor")
})

