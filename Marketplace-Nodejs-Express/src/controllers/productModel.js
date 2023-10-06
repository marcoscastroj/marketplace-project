const MyError = require("../middlewares/MyError")
const prodModel = require("../models/productModel")

async function createProduct(req, res) {
    const { name, type, code, validity, price } = req.body
    const promotionPrice = 0

    if (!name) {
        throw new MyError("Nome inválido", 422)
    }
    if (!code) {
        throw new MyError("Código inválido", 422)
    }
    if (!validity) {
        throw new MyError("Validade inválida", 422)
    }
    if (!type) {
        throw new MyError("Tipo inválido", 422)
    }

    const isProduct = await prodModel.findOne({ code })

    if (isProduct) {
        throw new MyError("Produto já existente", 409)
    }

    const product = await prodModel.create({ name, code, validity, type, price, promotionPrice })

    return res.status(201).json(product)
}

async function getProduct(req, res) {
    const { code } = req.params
    
    if (!code) {
        throw new MyError("Código inválido")
    }

    const isProduct = await prodModel.findOne({ code })

    if (!isProduct) {
        throw new MyError("Produto não encontrado")
    }

    return res.status(200).json(isProduct)
}

async function listProduct(req, res) {
    const products = await prodModel.find()

    return res.status(200).json(products)
}

async function setPromotion(req, res) {
    const { code } = req.params
    const { promotionPrice } = req.body

    if (!code) {
        throw new MyError("Código inválido")
    }

    const isProduct = await prodModel.findOne({ code })

    if (!isProduct) {
        throw new MyError("Produto não encontrado")
    }

    await prodModel.updateOne({ code }, { promotionPrice })

    const updatedProduct = await prodModel.findOne({ code })

    return res.status(200).json(updatedProduct);
}

async function deleteProduct(req, res) {
    const { code } = req.params

    if (!code) {
        throw new MyError("Código inválido")
    }

    const isProduct = await prodModel.findOne({ code })

    if (!isProduct) {
        throw new MyError("Produto não encontrado")
    }

    await prodModel.deleteOne({ code })

    return res.status(200).json({ message: "Produto deletado!" })
}

module.exports = {
    createProduct,
    getProduct,
    setPromotion,
    deleteProduct,
    listProduct
}