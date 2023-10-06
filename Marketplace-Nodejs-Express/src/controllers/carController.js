const MyError = require("../middlewares/MyError")
const carModel = require("../models/carModel")

async function getShopping(req, res){
    const id = req.params.id
    if(!id){
        throw new MyError("Id não enviado")
    }
    const shoppingExists = await carModel.findOne({_id: id})
    if (!shoppingExists){
        throw new MyError("Compra não emcontrada")
       
    }
    return res.status(200).json(shoppingExists)

}

async function addCar(req, res){
    const product = req.body.product
    const client = req.body.client

    if(!product){
        throw new MyError("Produto não foi enviado")
    }
    if(!client){
        throw new MyError("Cliente não enviado")
    }

    const car = await carModel.create({ product, client})

    return res.status(201).json(car)

}


async function deleteShopping(req, res){
    const id = req.params.id
    if(!id){
        throw new MyError("Compra não enviado")
    }
    const shoppingExists = await carModel.findOne({_id: id})
    if (!shoppingExists){
        throw new MyError("Compra não emcontrado")
       
    }
  
    await carModel.deleteOne({_id: id})
    
    return res.status(200).json({message:"Compra deletado com exito"})
}

async function updateShopping(req, res){
    const id = req.params.id
    if(!id){
        throw new MyError("ID não enviado")
    }
    const shoppingExists = await carModel.findOne({_id: id})
    if (!shoppingExists){
        throw new MyError("Compra não emcontrada")
       
    }
    const product = req.body.product
    const client = req.body.client
     
    await carModel.updateOne({_id: id},{ product, client})
    return res.status(200).json({message: "Carrinho atualizado com exito"})

}




module.exports = {
    addCar, getShopping, updateShopping, deleteShopping
}