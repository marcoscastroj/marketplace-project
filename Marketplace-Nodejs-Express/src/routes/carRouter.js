const{Router} = require("express")

const { addCar, deleteShopping, getShopping, updateShopping } = require("../controllers/carController")
const { authenticate } = require("../middlewares/authenticate")

const carRouter = Router()

carRouter.post("/car", authenticate, addCar)
carRouter.get("/car/:id", authenticate, getShopping)
carRouter.put("/car/:id", authenticate, updateShopping)
carRouter.delete("/car/:id", authenticate, deleteShopping)

module.exports = carRouter