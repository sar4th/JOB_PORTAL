import express from "express";
import { jobModel } from "../models/jobModel.js";

export const newJOb = async (req, res) => {
  const {
    title,
    company,
    location,
    description,
    requirements,
    salary,
    postedAt,
  } = req.body;

  if (!title || !company || !location || !description || !requirements || !salary) {
    res.json({
      success: false,
      message: "All Fields are required",
    });
  } else {
    try {
      const newJob = await jobModel.create({
        title,
        company,
        location,
        description,
        requirements,
        salary,
        postedAt,
      });

      res.json({
        success: true,
        message: "Job created successfully",
        job: newJob
      });
    } catch (error) {
      console.error(error);
      res.json({
        success: false,
        message: "Failed to create new job post"
      });
    }
  }
};

export const updateJob= (req,res) =>{
  
}