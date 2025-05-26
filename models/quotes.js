import mongoose from "mongoose";

const QuotesSchema = new mongoose.Schema({
    formType: {
    type: String,
  }, // Next.js, WordPress
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  projectName: {
    type: String,
    require: true,
  },
  projectType: {
    type: String,
  },
  description: {
    type: String,
  },
  functionalities: {
    type: Array,
  },
  design: {
    type: Date,
  },
  budget: {
    type: String,
  },
  timeline: {
    type: String,
  },
  comments: {
    type: String,
  },
}, {
    timestamps: true
})

export default mongoose.models.Quotes || mongoose.model('Quotes', QuotesSchema)