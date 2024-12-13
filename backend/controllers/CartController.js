import React from 'react'
import userModel from '../modules/UserModel'

// add item to user card 
const addToCard=async (req, res)=>{
    try{
        let userData=await  userModel.findOne({_id:req.body.userId})
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]
        }else{
            cartData[req.body.itemId]+=1;
        }
            await userModel.findByIdAndUpdate(req.body.userId,(cartData));
            res.json({success:true,message:'Added to Cart'})
    }
    catch(error){
  console.log(error);
  res.json({success:false,message:"Error"})
  
    }

};

//remove item from user card 
const clearFromCard=async (req, res)=> {
    
}

//fetch user data 
const getCart=async(req,res)=>{

}

export{addToCard,clearFromCard,getCart}
