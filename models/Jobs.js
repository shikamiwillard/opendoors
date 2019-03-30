import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const JobSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  job_title: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  company_logo: {
    type: String,
    required: true
  },
  about_company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tech_stack: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  },
  bonus_skills: {
    type: String,
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  benefits: {
    type: String,
    required: true
  },
  apply: {
    type: String,
    required: true
  },
  date_posted: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  }
});

const Job = mongoose.model("Job", JobSchema);

export default Job;