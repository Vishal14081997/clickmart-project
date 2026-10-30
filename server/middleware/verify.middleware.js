import jwt, { decode } from "jsonwebtoken"
import User from "../models/user.model.js"

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if(!authHeader){
            return res.status(401).json({message:"Unauthorized"})
        }
        // console.log(authHeader);
        const token = authHeader.split(" ")[1]
        // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded);

        const user = await User.findOne({ email: decoded.email }).select("-password")
        // console.log(user);
        if(!user){
            return res.status(401).json({message:"user not found"})
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("jwt verification error" , error.message);
        return res.status(401).json({message:"Invalid or expired token"})
    }
}
export default verifyToken;