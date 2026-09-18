import express from "express";
import { login, Signup ,logout} from "../controllers/auth.controller.js";
const authRouter = express.Router()
 authRouter.post("/signup",Signup)
 authRouter.post("/login",login)
 authRouter.get("/logout",logout)
export default authRouter