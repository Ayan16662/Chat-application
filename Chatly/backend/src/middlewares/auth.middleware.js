import jwt from "jsonwebtoken";
const isAuth = async(req,res,next)=>{
    try {
        let token = req.cookies.token
        if(!token){
            return res.status(400).json({message:"token is not found"})
        }
        let verifyToken = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifyToken
        next()
    } catch (error) {
        return res.status(400).json({message:"Invalid token"})
    }
}
export default isAuth