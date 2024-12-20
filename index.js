import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Route from "./routes.js"
import path from "path"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors({
    origin: 'https://kasir-tan.vercel.app',
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(express.static('images'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", Route)


const PORT = process.env.PORT || 7000
const URL = process.env.MONGO_URL

mongoose.connect(URL);
app.listen(PORT, (res) => {
    console.log("Berhasil Menyambungkan")
})
