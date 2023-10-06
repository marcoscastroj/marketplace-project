const{ Router } = require("express")

const { createEmployee,getEmployee, deleteEmployee, updateEmployee } = require("../controllers/employeeModel")

const {authenticate} = require("../middlewares/authenticate")

const employeeRouter = Router()

employeeRouter.post("/employees", createEmployee)
employeeRouter.get("/employees", authenticate, getEmployee)
employeeRouter.put("/employees/:cpf", authenticate, updateEmployee)
employeeRouter.delete("/employees/:cpf", authenticate, deleteEmployee)

module.exports = employeeRouter