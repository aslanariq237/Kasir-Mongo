import mongoose from "mongoose";
import Customer from "../Model/customerModel.js"

export const createCustomer = async(req, res) => {
    const newCustomer = new Customer(req.body)

    const {_id} = newCustomer
    const exist = Customer.findOne({_id})

    if(exist){
        return res.status(400).json({errorMessage: "Customer Already Exist"})
    }
    const saveData = await newCustomer.save()
    res.status(200).json(saveData)
}

export const getCustomer = async(req, res) => {
    try {
        const customerData = await Customer.find()

        if (!customerData || customerData === 0) {
            return res.status(404)
        }
        res.status(200).json(customerData)
    } catch (error) {
        res.status(500).json({errorMessage: error})
    }
}