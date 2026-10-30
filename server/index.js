import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
dotenv.config()
import authRoute from "./routes/auth.route.js"
import adminRoute from "./routes/admin.route.js"
import cors from "cors"

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use(cors())

app.use("/auth", authRoute);
app.use("/admin", adminRoute)
dbConnect()

app.listen(port, () => {
    console.log(`server start ${port}`);
})
