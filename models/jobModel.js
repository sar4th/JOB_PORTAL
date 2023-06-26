import mongoose  from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  postedAt: {
    type: Date,
    default: Date.now
  }
});

export const jobModel = mongoose.model("Job", jobSchema);
