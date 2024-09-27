import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Route from "./routes.js"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors({
    origin: 'https://kasir-tan.vercel.app',
    credentials: true,
    optionsSuccessStatus: 200
}))
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", Route)


const PORT = process.env.PORT || 7000
const URL = process.env.MONGO_URL

mongoose.connect(URL);
app.listen(PORT, (res) => {
    console.log("Berhasil Menyambungkan")
})