import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
dotenv.config()
import authRoute from "./routes/auth.route.js"

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use("/auth", authRoute);
dbConnect()

app.listen(port, () => {
    console.log(`server start ${port}`);
})
