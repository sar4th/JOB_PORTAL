import express from "express"
import { empLogin, empRegister, logout } from "../controller/empController.js"




const router=express.Router()

router.post("/emp/register", empRegister);
router.post("/emp/login", empLogin);
router.get("/emp/logout",logout)

export default router