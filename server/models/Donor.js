const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  lastDonationDate: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Donor", donorSchema);
