import mongoose from "mongoose";
import Cart from "../Model/cartModel.js"

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

export const findItems = async(req, res) => {
    try {
        const itemData = await Cart.find().populate('id_product');

        if(!itemData || itemData === 0){
            return res.status(404)
        }
        res.status(200).json(itemData)
    } catch (error) {
        res.status(500).json({errorMessage: error})
    }
}

export const deleteItems = async(req, res) => {
    try{
        const deleteAll = await Cart.deleteMany()       
        if(!deleteAll){
            res.status(404).json("Barang Mungkin di hapus")
        }
        res.status(200).json(deleteAll)
    }catch(err) {
        res.status(500).json({errorMessage: err})
    }
}