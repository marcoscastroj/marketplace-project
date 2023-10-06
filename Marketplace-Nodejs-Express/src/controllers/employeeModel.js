const MyError = require("../middlewares/MyError")
const employeeModel = require("../models/employeeModel")

async function getEmployee(req, res){
    const email = req.email

    if(!email){
        throw new MyError("CPF inválido")
    }
    const isEmployee = await employeeModel.findOne({email})

    if (!isEmployee){
        throw new MyError("Funcionario não emcontrado", 401)
    }

    return res.status(200).json(isEmployee)

}

async function createEmployee(req, res){
    const name = req.body.name
    const cpf = req.body.cpf
    const password = req.body.password
    const age = req.body.age
    const email = req.body.email

    if(!name){
        throw new MyError("Nome inválido")
    }
    if(!cpf){
        throw new MyError("CPF inválido")
    }
    if(!age){
        throw new MyError("Idade inválida")
    }
    if(!password){
        throw new MyError("Senha Inválida")
    }
    if(!email){
        throw new MyError("Email inválido")
    }

    const isEmployeeByCpf = await employeeModel.findOne({cpf})
    const isEmployeeByEmail = await employeeModel.findOne({email})
    
    if(isEmployeeByCpf){
        throw new MyError("Funcionario ja existente",409)
    }
    
    if(isEmployeeByEmail){
        throw new MyError("Funcionario ja existente",409)
    }
    
    const employee = await employeeModel.create({ name, cpf, password, age, email})

    return res.status(201).json(employee)

}

async function deleteEmployee(req, res){
    const cpf = req.params.cpf
    if(!cpf){
        throw new MyError("CPF inválido")
    }
    const isEmployee = await employeeModel.findOne({cpf})

    if (!isEmployee){
        throw new MyError("Funcionario não emcontrado", 404)
       
    }
  
    await employeeModel.deleteOne({cpf})
    
    return res.status(200).json({message:"Funcionario deletado!"})

}

async function updateEmployee(req, res){
    const cpf = req.params.cpf
    if(!cpf){
        throw new MyError("CPF inválido")
    }
    const isEmployee = await employeeModel.findOne({cpf})
    if (!isEmployee){
        throw new MyError("Funcionario não emcontrado", 401)
       
    }
    const name = req.body.name
    const newCpf = req.body.cpf
    const password = req.body.senha
    const age = req.body.idade
    const email = req.body.email

    const isCpf = await employeeModel.findOne({cpf:newCpf})

    if (isCpf){
        throw new MyError("CPF existente")
    }
     
    await employeeModel.updateOne({cpf},{name, cpf:newCpf, password, age, email})

    return res.status(200).json({ message: "Usuário atualizado com sucesso!!"})

}

module.exports = {
   createEmployee, getEmployee, updateEmployee, deleteEmployee
}