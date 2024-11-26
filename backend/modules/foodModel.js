import mongoose from "mongoose";

const foodsSchema=new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    category:{type:String, required:true},
    image:{type:String, required:true}
})
const foodModule =mongoose.models.food || mongoose.model('food',foodsSchema)

export default foodModule;