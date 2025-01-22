const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    fullName: {
      type: String,
      required: [true, "Patient name is required"],
      minlength: [2, "Full name must be at least 2 characters"],
    },
    bloodType: {
      type: String,
      required: [true, "Blood type is required"],
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message: "Invalid blood type",
      },
    },
    requiredUnits: {
      type: Number,
      required: [true, "Required units is required"],
      min: [1, "Minimum 1 unit required"],
      max: [10, "Maximum 10 units allowed"],
    },
    hospital: {
      type: String,
      required: [true, "Hospital name is required"],
      minlength: [3, "Hospital name must be at least 3 characters"],
    },
    hospitalAddress: {
      type: String,
      required: [true, "Hospital address is required"],
      minlength: [10, "Hospital address must be detailed"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      minlength: [10, "Mobile number must be at least 10 digits"],
      match: [/^[0-9+\-\s()]+$/, "Invalid mobile number format"],
    },
    alternateContact: {
      type: String,
      match: [/^[0-9+\-\s()]+$/, "Invalid alternate contact number format"],
    },
    urgencyLevel: {
      type: String,
      required: [true, "Urgency level is required"],
    },
    additionalNotes: {
      type: String,
      trim: true,
    },
    postedBy: {
      type: String,
      required: [true, "Posted by name is required"],
      minlength: [2, "Posted by name must be at least 2 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "fulfilled", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Patient", patientSchema);
