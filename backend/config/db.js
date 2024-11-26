import mongoose from "mongoose";

export const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://amblessed:GodOfMan22@cluster0.dqn73.mongodb.net/Food-Delivery').then(()=>{
        console.log()
    })
}