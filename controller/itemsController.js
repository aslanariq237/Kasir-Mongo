import mongoose from "mongoose";
import Items from "../Model/itemsModel.js";

export const createItems = async (req, res) => {
    try {        
        const newItems = await Items({
            nama : req.body.nama,
            harga : req.body.harga,
            file : req.file.filename,        
            per : req.body.per,
            stok : req.body.stok
        })

        const { _id } = newItems
        const exist = await Items.findOne({ _id })

        if (exist) {
            return res.status(400).json({ errorMessage: "Items Already Exists" })
        }

        if (!req.file) {
            return res.status(400).json({ error: 'File is Required' });
        }

        const saveData = await newItems.save()
        res.status(200).json(saveData)
    } catch (err) {
        res.status(500).json({ errorMessage: err.message })
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