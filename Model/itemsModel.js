import mongoose from "mongoose";

const ItemsModel = new mongoose.Schema({
    nama : {
        type: String, 
        required : true,
    },
    harga: {
        type: Number,
        required: true
    },
    per : {
        type: String,
        required : true
    },
    stok: {
        type: Number,
        required: true
    }
})

export default mongoose.model("items", ItemsModel)