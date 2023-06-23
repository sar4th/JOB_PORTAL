import express from "express"
import { empLogin, empRegister } from "../controller/empController.js"




const router=express.Router()

router.post("/emp/register", empRegister);
router.post("/emp/login", empLogin);

export default router