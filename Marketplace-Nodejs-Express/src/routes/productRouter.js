const { Router } = require("express")

const { setPromotion, createProduct, listProduct, getProduct, deleteProduct } = require("../controllers/productModel")

const { authenticate } = require("../middlewares/authenticate")

const prodRouter = Router()

prodRouter.get("/products/all", authenticate, listProduct)
prodRouter.post("/products", authenticate,createProduct)
prodRouter.get("/products/:code", authenticate, getProduct)
prodRouter.put("/products/:code", authenticate, setPromotion)
prodRouter.delete("/products/:code", authenticate, deleteProduct)

module.exports = prodRouter