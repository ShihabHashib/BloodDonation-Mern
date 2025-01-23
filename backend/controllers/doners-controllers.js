const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Donor = require("../models/Donor");

// Register new donor
const registerDonor = async (req, res) => {
  try {
    const { fullName, email, password, bloodType, phone } = req.body;

    // Check if donor exists
    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(422).json({ message: "Donor already exists" });
    }

    // Hash password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new donor
    const donor = new Donor({
      fullName,
      email,
      password: hashedPassword, // Store hashed password
      bloodType,
      phone,
    });

    await donor.save();

    // Create JWT token
    const token = jwt.sign(
      { userId: donor._id, email: donor.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Donor registered successfully",
      token,
      donor: {
        id: donor._id,
        fullName: donor.fullName,
        email: donor.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

// Login donor
const loginDonor = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find donor
    const donor = await Donor.findOne({ email });
    if (!donor) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, donor.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign(
      { userId: donor._id, email: donor.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      token,
      donor: {
        id: donor._id,
        fullName: donor.fullName,
        email: donor.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// Get donor profile
const getDonorProfile = async (req, res) => {
  try {
    const donorId = req.params.id;
    const donor = await Donor.findById(donorId).select("-password");

    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    res.json(donor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching profile", error: error.message });
  }
};

// Update donor profile
const updateDonorProfile = async (req, res) => {
  try {
    const donorId = req.params.id;
    const updates = req.body;

    // Remove password from updates if present
    delete updates.password;

    const donor = await Donor.findByIdAndUpdate(
      donorId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");

    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    res.json(donor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

// Add donation record
const addDonationRecord = async (req, res) => {
  try {
    const donorId = req.params.id;
    const { date, location, notes } = req.body;

    const donor = await Donor.findById(donorId);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    donor.donationHistory.push({ date, location, notes });
    donor.lastDonation = date;
    donor.totalDonations += 1;

    await donor.save();
    res.json(donor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding donation record", error: error.message });
  }
};

module.exports = {
  registerDonor,
  loginDonor,
  getDonorProfile,
  updateDonorProfile,
  addDonationRecord,
};
