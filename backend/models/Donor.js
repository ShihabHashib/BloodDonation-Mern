const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bloodType: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    phone: { type: String, required: true },
    address: { type: String },
    lastDonation: { type: Date },
    totalDonations: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    donationHistory: [
      {
        date: { type: Date },
        location: { type: String },
        notes: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donor", donorSchema);
