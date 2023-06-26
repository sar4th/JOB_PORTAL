import express from "express"
import { empLogin, empRegister, logout,  } from "../controller/empController.js"
import { newJOb, updateJob } from "../controller/jobController.js";
import { IsAuthenticated } from "../middlewares/auth.js";




const router=express.Router()

router.post("/emp/register", empRegister);
router.post("/emp/login", empLogin);
router.get("/emp/logout",logout)

//post job

router.post("/emp/new-job",IsAuthenticated,newJOb)
router.put("/emp/update-job",IsAuthenticated,updateJob)



export default router