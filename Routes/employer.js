import express from "express";
import { empLogin, empRegister, logout } from "../controller/empController.js";
import { deleteJob, newJOb, updateJob } from "../controller/jobController.js";
import { IsAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/emp/register", empRegister);
router.post("/emp/login", empLogin);
router.get("/emp/logout", logout);

//post job

router.post("/emp/new-job", IsAuthenticated, newJOb);

router.put("/emp/update-job/:id", IsAuthenticated, updateJob);
router.delete("/emp/delete-job/:id", IsAuthenticated, deleteJob);

export default router;
