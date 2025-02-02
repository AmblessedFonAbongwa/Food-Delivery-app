import express from "express"
import  cors from 'cors'
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/UserRoutes.js"
import "dotenv/config"
import CartRouter from "./routes/cartRoute.js"
import authMiddleWare from "./middleware/auth.js"
import orderRouter from "./routes/orderRoute.js"

//app config 
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDb()

//api endpoints
app.use("/api/food",foodRouter)
app.use('/images', express.static("uploads"))
app.use('/api/user', userRouter)
app.use('/api/cart',CartRouter)
app.use('/api/order',orderRouter)

app.get("/",(req,res)=>{
    res.send('it is finish')
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://amblessed:GodOfMan22@cluster0.dqn73.mongodb.net/?
