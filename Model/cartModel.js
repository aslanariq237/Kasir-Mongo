import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
    id_product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'items',
        required : true
    },
    qty : {
        type: Number,
        required : true
    }
})

export default mongoose.model('carts', cartModel)