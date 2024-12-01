import React from 'react'
import userModel from '../modules/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//user login 
const createToken= (id)=>{
    return jwt.sign({id})
}
const RegisterUser= async(res, req)=>{
 const {name,email,password}=req.body;
 try{
    const exist=await userModel.find({email})
    if(exist){
        return res.json({success:false,message:'user already exist'})
    }
    //validating email format and strong password
    if(validator.isEmail(email)) {
        return res.json({success:false,message:'please Enter A valid E-mail'})
    }
    if(password.length<8){
        return res.json({success:false,message:"Please Enter A Strong Password"})
    }
    //hatching UserPassword
    const salt=await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)
  
    const newModel=new userModel({name:name
        ,email:email,
        password:hashedPassword
    })
   const user= await newUser.save()

 }
catch(error){

}
}

//register user
const LoginUser= async (res,req)=>{

}

export default {RegisterUser,LoginUser}
