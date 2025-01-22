const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloodRequestSchema = new Schema(
  {
    requestId: {
      type: String,
      unique: true,
    },
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
    },
    bloodType: {
      type: String,
      required: [true, "Blood type is required"],
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    units: {
      type: Number,
      required: [true, "Units required"],
      min: 1,
      max: 10,
    },
    hospital: {
      type: String,
      required: [true, "Hospital name is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    urgency: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
    },
    alternateContact: {
      type: String,
      match: [/^[0-9+\-\s()]+$/, "Invalid alternate contact number format"],
    },
    status: {
      type: String,
      enum: ["pending", "fulfilled", "cancelled"],
      default: "pending",
    },
    requester: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    additionalNotes: String,
    postedBy: {
      type: String,
      required: [true, "Posted by is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Update the pre-save middleware to handle potential race conditions
bloodRequestSchema.pre("save", async function (next) {
  try {
    if (this.isNew && !this.requestId) {
      let count;
      let requestId;
      let isUnique = false;

      // Keep trying until we get a unique requestId
      while (!isUnique) {
        count = await mongoose.model("BloodRequest").countDocuments();
        const sanitizedName = this.patientName
          .replace(/[^a-zA-Z0-9]/g, "")
          .substring(0, 3)
          .toUpperCase();
        const serialNumber = (count + 1).toString().padStart(4, "0");
        requestId = `${sanitizedName}-${serialNumber}`;

        // Check if this requestId already exists
        const existingRequest = await mongoose
          .model("BloodRequest")
          .findOne({ requestId });
        if (!existingRequest) {
          isUnique = true;
        }
      }

      this.requestId = requestId;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);
