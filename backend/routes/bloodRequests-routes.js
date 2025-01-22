const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/BloodRequest");

// GET all blood requests
router.get("/", async (req, res) => {
  try {
    const bloodRequests = await BloodRequest.find();
    res.json(bloodRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET blood request by requestId
router.get("/:requestId", async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.findOne({
      requestId: req.params.requestId,
    }).populate("requester", "name");

    if (!bloodRequest) {
      return res.status(404).json({
        message: `Blood request with ID ${req.params.requestId} not found`,
      });
    }

    res.json(bloodRequest);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching blood request details",
      error: error.message,
    });
  }
});

module.exports = router;
