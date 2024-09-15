import mongoose from "mongoose";

const paymentModels = new mongoose.Schema({
    nama : {
        id_cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'carts',
            required: true
        },
        id_pelanggan : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'customers',
        },
        nama : {
            type: String,
        }, 
        motede_payment : {
            type: String,
            required: true,
        },
        status_payment: {
            type: Boolean,
            required: true,
            default : false
        }
    }
})

export default mongoose.model('payments', paymentModels)