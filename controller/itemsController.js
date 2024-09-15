import mongoose from "mongoose";
import Items from "../Model/itemsModel.js";

export const createItems = async (req, res) => {
    try {
        const newItems = await Items(req.body)

        const { _id } = newItems
        const exist = await Items.findOne({ _id })

        if (exist) {
            return res.status(400).json({ errorMessage: "Items Already Exists" })
        }
        const saveData = await newItems.save()
        res.status(200).json(saveData)
    }catch(err) {
        res.status(500).json({errorMessage: err})
    }
}

export const getItems = async (req, res) => {
    try {
        const itemData = await Items.find()

        if (!itemData || itemData === 0) {
            return res.status(404)
        }
        res.status(200).json(itemData)
    } catch (error) {
        res.status(500).json({ errorMessage: error })
    }
}