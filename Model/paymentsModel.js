import mongoose from "mongoose";

const paymentModels = new mongoose.Schema({
    id_cart: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'carts',
        // required: true
    },
    id_pelanggan : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
    },
    nama : {
        type: String,
        required: true,
    }, 
    total: {
        type: Number,
        required: true
    },
    metode_payment : {
        type: String,
        required: true,
    },
    status_payment: {
        type: String,
        required: true,
    }
})

export default mongoose.model('payments', paymentModels)