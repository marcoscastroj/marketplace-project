const{Schema, default: mongoose}=require("mongoose")

const ClientModel = new Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true ,unique:true}, 
    age: {type: Number, required: true}
})

module.exports = mongoose.model("ClientModel", ClientModel)