const MyError = require("../middlewares/MyError")

const clientModel = require("../models/clientModel")
const employeeModel = require("../models/employeeModel")

const{ sign } = require("jsonwebtoken")

async function authClient(req, res){
    const email = req.body.email
    const cpf = req.body.cpf

    if(!email){
        throw new MyError("CPF não enviado")
    }
    if(!cpf){
        throw new MyError("Nome não enviada")
    }

    const isClient = await clientModel.findOne({email})

    if(!isClient){
        throw new MyError("Cliente não encontrado")
    }

    if(!(isClient.cpf === cpf)){
        throw new MyError("cliente não encontrado")
        
    } 

    const secretJWT = "@jwt_secret"

    const token = sign({email,cpf}, secretJWT,{expiresIn: '7d'})
    return res.status(200).json(token)
}

async function authEmployee(req, res){
    const email  = req.body.email
    const password = req.body.password

    if(!email){
        throw new MyError("CPF não enviado!!!")
    }
    if(!password){
        throw new MyError("Senha não enviada")
    }

    const isEmployee = await employeeModel.findOne({email})
    

    if(!isEmployee){
        throw new MyError("Funcionario não encontrado", 401)
    }
    if(isEmployee.password !== password){
        throw new MyError("Funcionario não encontrado", 401)
 
    } 
    const secretJWT = "@jwt_secret"

    const token = sign({email, senha: password}, secretJWT, { expiresIn: '7d'})

    return res.json({token})
}

module.exports = {
    authEmployee,  authClient
}

