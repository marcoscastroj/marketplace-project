const MyError = require("../middlewares/MyError")
const clientModel = require("../models/clientModel")

async function getClient(req, res){
    const cpf = req.params.cpf
    if(!cpf){
        throw new MyError("CPF não enviado")
    }
    const clientExists = await clientModel.findOne({cpf})
    
    if (!clientExists){
        throw new MyError("Cliente não emcontrado")
       
    }
    return res.status(200).json(clientExists)
}

async function createClient(req, res){
    const name  = req.body.name
    const cpf = req.body.cpf
    const age = req.body.age

    if(!nome){
        throw new MyError("Nome não foi enviado")
    }
    if(!cpf){
        throw new MyError("CPF não enviado")
    }
    if(!age){
        throw new MyError("Idade não enviada")
    }

    const isClient = await clientModel.findOne({cpf})

    if(isClient){
        throw new MyError("Cliente ja existe")
    }

    const client = await clientModel.create({name, cpf, age})

    return res.status(201).json(client)
}

async function deleteClient(req, res){
    const cpf = req.params.cpf
    if(!cpf){
        throw new MyError("CPF não enviado")
    }
    const isClient = await clientModel.findOne({cpf})
    if (!isClient){
        throw new MyError("Cliente não emcontrado")
       
    }
  
    await clientModel.deleteOne({cpf})
    
    return res.status(200).json({message:"Cliente deletado com exito"})
}

async function updateClient(req, res){
    const cpf = req.params.cpf
    if(!cpf){
        throw new MyError("CPF não enviado")
    }
    const isClient = await clientModel.findOne({cpf})
    if (!isClient){
        throw new MyError("Cliente não emcontrado")
       
    }
    const name = req.body.nome
    const newCpf = req.body.cpf
    const age = req.body.age

    const isCpf = await clientModel.findOne({cpf:novoCpf})
    if (isCpf){
        throw new MyError("CPF ja existe")
    }
     
    await clientModel.updateOne({cpf},{name, newCpf, age})
    return res.status(200).json({message: "Cliente atualizado com exito"})
}

module.exports = {
    createClient, getClient, updateClient, deleteClient
}