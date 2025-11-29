import express from "express"
import router from './routes/auth.route.js'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js";
import messageRouter from "./routes/message.route.js";
import cors from "cors"


dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials : " true"
}))

app.use("/api/auth",router)
app.use("/api/message",messageRouter)




app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT}`)
    connectDB()
})