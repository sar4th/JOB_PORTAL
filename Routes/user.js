import express from "express";
import {
  Home,
  getUser,
  login,
  register,
  logout,
} from "../controller/usersController.js";
import { IsAuthenticated } from "../middlewares/auth.js";
import { getAlljobs, jobSearch } from "../controller/jobController.js";

const router = express.Router();

router.get("/", Home);
router.post("/users/register", register);
router.post("/users/login", login);

router.get("/users/logout", logout);

router.get("/users/me", IsAuthenticated, getUser);
router.get("/users/get-all-jobs", IsAuthenticated, getAlljobs);
router.get("/users/get-search", jobSearch);
export default router;
