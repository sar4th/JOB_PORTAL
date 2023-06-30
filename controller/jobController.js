import express from "express";
import { jobModel } from "../models/jobModel.js";
import { logout } from "./empController.js";

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

  if (
    !title ||
    !company ||
    !location ||
    !description ||
    !requirements ||
    !salary
  ) {
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
        job: newJob,
      });
    } catch (error) {
      console.error(error);
      res.json({
        success: false,
        message: "Failed to create new job post",
      });
    }
  }
};

export const updateJob = async (req, res) => {
  const jobId = req.params.id; // Assuming you pass the job ID in the URL parameter

  try {
    if (!jobId) {
      return res.json({
        success: false,
        message: "The Job Not Found",
      });
    }

    const updatedJob = await jobModel.findByIdAndUpdate(jobId, req.body, {
      new: true,
    });

    if (!updatedJob) {
      return res.json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      message: "Job Updated Successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Failed to update job",
    });
  }
};

export const deleteJob = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.json({
        success: false,
        message: "the requested job is not found ",
      });
    } else {
      const job = await jobModel.findOneAndDelete({ _id: id });

      res.json({
        success: true,
        message: "The job post deleted successfully",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

export const getAlljobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.json({
      success: true,
      message: "Job fetch successful",
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching jobs",
      error: error.message,
    });
  }
};
export const jobSearch =async(req,res) =>{
  try {
    const { keyword, location } = req.query; // Assuming you're passing keyword and location as query parameters
    
    // Query the database based on the search criteria
    const jobs = await jobModel.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { location: { $regex: location, $options: 'i' } }
      ]
    });
    return jobs.length > 0
    ? res.json(jobs)
    : res.status(404).json({ message: 'No jobs found' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

