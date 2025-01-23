const express = require("express");
const router = express.Router();
const {
  registerDonor,
  loginDonor,
  getDonorProfile,
  updateDonorProfile,
  addDonationRecord,
} = require("../controllers/doners-controllers");
const auth = require("../middleware/auth");

// Public routes
router.post("/register", registerDonor);
router.post("/login", loginDonor);

// Protected routes - require authentication
router.get("/profile/:id", auth, getDonorProfile);
router.put("/profile/:id", auth, updateDonorProfile);
router.post("/donation/:id", auth, addDonationRecord);

module.exports = router;
