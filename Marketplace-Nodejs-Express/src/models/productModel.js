const{Schema, default: mongoose}=require("mongoose")

const ProductModel = new Schema({
    name: {type: String, required: true},
    type:{type: String, required: true},
    code: {type: String, required: true ,unique:true}, 
    validity: {type: Date, required: true},
    price: {type: Number, required: true},
    promotionPrice: {type: Number, required: false}
})

module.exports = mongoose.model("ProductModel", ProductModel)