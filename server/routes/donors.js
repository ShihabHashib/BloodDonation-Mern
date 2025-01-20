const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get donor by ID
router.get("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.json(donor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new donor
router.post("/", async (req, res) => {
  const donor = new Donor({
    fullName: req.body.fullName,
    bloodType: req.body.bloodType,
    email: req.body.email,
    phone: req.body.phone,
    mobile: req.body.mobile,
  });

  try {
    const newDonor = await donor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update donor
router.patch("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    Object.keys(req.body).forEach((key) => {
      if (donor[key] !== undefined) {
        donor[key] = req.body[key];
      }
    });

    const updatedDonor = await donor.save();
    res.json(updatedDonor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete donor
router.delete("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    await donor.remove();
    res.json({ message: "Donor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
