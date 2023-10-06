const{Schema, default: mongoose}=require("mongoose")

const EmployeeModel = new Schema({
    name: {
        type: String, 
        required: true
    },
    cpf: {
        type: String, 
        required: true, 
        unique:true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("EmployeeModel", EmployeeModel)