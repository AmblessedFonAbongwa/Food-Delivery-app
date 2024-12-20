import userModel from "../modules/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//user login
const loginUser = async (req, res) => {
    const {email, password}=req.body;
    try{
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"user does not exist"})
        }
        const isMatch =await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token})
    }
 catch(error){
  console.log(error);
  res.json({success:false,message:"error"})
  
 }
};
//register user
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "user already exist" });
    }
    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please Enter A valid E-mail",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter A Strong Password",
      });
    }
    //hatching UserPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { registerUser, loginUser };
