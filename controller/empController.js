import express from "express";
import bcrypt from "bcrypt";
import { EmpModel } from "../models/empModel.js";
import { setCookie } from "../utils/features.js";

export const empRegister = async (req, res) => {
  const { name, email, organization, password } = req.body;
  try {
    const isEmp = await EmpModel.findOne({ email });
    if (isEmp) {
      res.json({
        success: false,
        message: "User exist ",
      });
    } else {
      let hashPass = await bcrypt.hash(password, 10);
      const newEmp = await EmpModel.create({
        name,
        email,
        organization,
        password: hashPass,
      });
      setCookie(newEmp, res, "registered successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export const empLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isEmp = await EmpModel.findOne({ email });
    if (!isEmp) {
      res.status(400).json({
        success: false,
        message: "User not Found",
      });
    } else {
      const isMatch = await bcrypt.compare(password, isEmp.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      setCookie(isEmp, res, "Welcome Back");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
  
};
