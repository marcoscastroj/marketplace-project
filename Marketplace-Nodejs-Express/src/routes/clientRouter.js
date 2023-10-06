const{Router} = require("express")
const { createClient, deleteClient, getClient, updateClient } = require("../controllers/clientController")
const { authenticate } = require("../middlewares/authenticate")

const clientRouter = Router()

clientRouter.post("/clients", createClient)
clientRouter.get("/clients/:cpf", authenticate, getClient)
clientRouter.put("/clients/:cpf", authenticate, updateClient)
clientRouter.delete("/clients/:cpf", authenticate, deleteClient)

module.exports = clientRouter