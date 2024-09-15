import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Route from "./routes.js"

const app = express()
dotenv.config()
app.use('/api', Route)

const PORT  = process.env.PORT || 7000
const URL = process.env.MONGO_URL

mongoose.connect(URL)
app.listen(PORT, (res) => {
    console.log("Berhasil Menyambungkan")
})