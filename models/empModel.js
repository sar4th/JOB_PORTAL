import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  organization: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});
export const EmpModel = mongoose.model("Employer", empSchema);
