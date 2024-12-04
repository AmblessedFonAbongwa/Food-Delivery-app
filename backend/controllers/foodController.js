import { error } from "console";
import foodModule from "../modules/foodModel.js";
import fs from 'fs'

//add food

const addFood = async(req, res)=>{
    let image_filename=`${req.file.filename}`;
    const food=new foodModule({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true, message:"Food Added"})

    }catch(error){
        console.log(error)
        res.json({success:false, message:"ERROR"})
    }
}
//add food item
const listFood= async(req,res)=>{
try{
    const foods=await foodModule.find({});
    res.json({success:true, data:foods})
} catch(error){
    console.log('error');
    res.json({success:false, message:'Failed'})
}
}

// remove food item
 const removeFood=async(req,res)=>{
 try{
    const food=await foodModule.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModule.findByIdAndDelete(req.body.id);
    res.json({success:true,message:'Food Removed'})
 }catch(error){
    console.log("error");
    res.json({success:false,message:'error'})
 }
 }
export{addFood,listFood,removeFood}