const{Schema, default: mongoose}=require("mongoose")

const CarModel = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientModel',
    },
})

module.exports = mongoose.model("CarModel", CarModel)


