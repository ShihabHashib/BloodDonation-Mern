const express = require("express");
const { body } = require("express-validator");
const { validate } = require("../middlewares/validation.js");
const Patient = require("../models/Patient.js");
const BloodRequest = require("../models/BloodRequest.js");

const router = express.Router();

// Validation rules for patient registration
const patientValidation = [
  body("fullName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Full name must be at least 2 characters"),
  body("bloodType")
    .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .withMessage("Please select a valid blood type"),
  body("hospital")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Hospital name must be at least 3 characters"),
  body("mobile")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Mobile number must be at least 10 digits")
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage("Invalid mobile number format"),
  body("alternateContact")
    .optional()
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage("Invalid alternate contact number format"),
  body("requiredUnits")
    .isInt({ min: 1, max: 10 })
    .withMessage("Required units must be between 1 and 10"),
  body("urgencyLevel")
    .trim()
    .notEmpty()
    .withMessage("Urgency level is required"),
  body("hospitalAddress")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Hospital address must be detailed"),
  body("additionalNotes").optional().trim(),
  body("postedBy")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Posted by name must be at least 2 characters"),
];

// @route   POST /api/patients/register
// @desc    Register a new patient and create blood request
// @access  Public
router.post(
  "/register",
  patientValidation,
  validate(patientValidation),
  async (req, res) => {
    try {
      const {
        fullName,
        bloodType,
        hospital,
        mobile,
        alternateContact,
        requiredUnits,
        urgencyLevel,
        hospitalAddress,
        additionalNotes,
        postedBy,
      } = req.body;

      // Create blood request
      const bloodRequest = new BloodRequest({
        patientName: fullName,
        bloodType,
        units: requiredUnits,
        hospital,
        location: hospitalAddress,
        urgency: calculateUrgencyLevel(urgencyLevel),
        contactNumber: mobile,
        alternateContact,
        status: "pending",
        additionalNotes,
        postedBy,
      });

      await bloodRequest.save();

      res.status(201).json({
        message: "Patient registration and blood request created successfully",
        bloodRequest,
      });
    } catch (error) {
      console.error("Error in patient registration:", error);
      res.status(500).json({
        message: "Error creating patient registration",
        error: error.message,
      });
    }
  }
);

// Helper function to calculate urgency level
function calculateUrgencyLevel(dateNeeded) {
  const today = new Date();
  const needDate = new Date(dateNeeded);
  const diffDays = Math.ceil(
    (needDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
}

module.exports = router;
