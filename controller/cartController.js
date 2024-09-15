import mongoose from "mongoose";
import Cart from "../Model/cartModel"

export const createCart = async (req, res) => {
    const newCart = new Cart(req.body)

    const { _id } = newCart
    const exist = await Cart.findOne({ _id })
    if (exist) {
        return res.status(400).json({ errorMessage: "Cart Already Booked" })
    }
    const saveData = await newCart.save()
    res.status(200).json(saveData)
}
export const getCart = async (req, res) => {
    try {
        const cartData = await Cart.find()

        if (!cartData || cartData === 0) {
            return res.status(404)
        }
        res.status(200).json(cartData)
    } catch (error) {
        res.status(500).json({errorMessage: error})
    }
}