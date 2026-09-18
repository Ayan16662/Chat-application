
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/token.js";


export const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        const token = generateToken(user._id);

        return res.status(201).json({
            success: true,
            message: "Signup successful",
            token,
            user
        });

    } catch (error) {
        console.log("Signup Error:", error);

        return res.status(500).json({
            success: false,
            message: `signup error ${error}`
        });
    }
};
  export  const login = async(req,res)=>{
    try {

        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"user doesn't exist"})
        }

        const isMatch  = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:"password is incorrect"})
        }
        const token = await genrateToken(user._id)
         res.cookie("token", token,{
         httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite :"None",
         secure :false
         })

         return res.status(200).json({message:"user login succesfully ", user})

        
    } catch (error) {
        return res.status(500).json({
            message: `login error ${error}`
        })
        
    }
   }
   export const logout = async(req,res)=>{

    try {
        res.clearCookie("token")
        return res.status(200).json({message:"logout successfully"})
        
    } catch (error) {
        return res.status(500).json({message:`logout error ${error}`})
        
    }

   }
 export default {login, Signup, logout}


