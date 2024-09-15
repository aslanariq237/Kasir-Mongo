import mongoose from "mongoose";
import Payment from "../Model/paymentsModel";

export const createPayment = async(req, res) => {
    const newPayment = new Payment(req.body)

    const {_id} = newPayment
    const exist = await Payment.findOne({_id})
    if (exist) {
        return res.status(400).json({errorMessage: "Payment has been bookes"})
    }

    const saveData = await newPayment.save()
    res.status(200).json(saveData)
}

export const getPayment = async(req, res) => {
    try {
        const paymentData = await Payment.find()

        if (!paymentData || paymentData === 0) {
            return res.status(404)
        }
        res.status(200).json(paymentData)
    } catch (error) {
        res.status(500).json({errorMessage: error})
    }
}