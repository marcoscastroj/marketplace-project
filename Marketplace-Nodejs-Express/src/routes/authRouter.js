const{Router} = require("express")
const { authEmployee, authClient } = require("../controllers/authController")


const authRouter = Router()

authRouter.post("/auth/employee", authEmployee)
authRouter.post("/auth/client", authClient)

module.exports = authRouter