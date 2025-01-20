const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  hospital: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  alternateContact: {
    type: String,
    required: true,
  },
  requiredUnits: {
    type: Number,
    required: true,
    min: 1,
  },
  urgencyLevel: {
    type: String,
    required: true,
    enum: ["high", "medium", "low"],
  },
  status: {
    type: String,
    enum: ["pending", "fulfilled", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
