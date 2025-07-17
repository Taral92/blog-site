const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)
app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.get("/test", (req, res) => {
    res.send("Auth route working")
})

connectDB()
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
