import mongoose from "mongoose";

const CustomerModel = new mongoose.Schema({
    nama : {
        type : String,
        required: true
    },
    nomor : {
        type : Number,
        required : true
    },
    email: {
        type : String
    }
})

export default mongoose.Model('customers', CustomerModel)