const express = require("express");
const router = express.Router();
const {
  registerDonor,
  getDonorProfile,
  updateDonorProfile,
  addDonationRecord,
} = require("../controllers/doners-controllers");

// Register new donor
router.post("/register", registerDonor);

// Get donor profile
router.get("/profile/:id", getDonorProfile);

// Update donor profile
router.patch("/profile/:id", updateDonorProfile);

// Add donation record
router.post("/donation/:id", addDonationRecord);

module.exports = router;
