import express  from "express"
import { login,signup,logOut } from "../controlers/auth.js";

const router = express.Router();

router.post('/login' , login)
router.post('/sign_up', signup)
router.post('/logout', logOut)

export default router