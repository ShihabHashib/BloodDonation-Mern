const mongoose = require("mongoose");
const BloodRequest = require("../models/BloodRequest");

const migrateRequestIds = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const requests = await BloodRequest.find({ requestId: { $exists: false } });
    console.log(`Found ${requests.length} requests to migrate`);

    for (let i = 0; i < requests.length; i++) {
      const request = requests[i];
      const sanitizedName = request.patientName
        .replace(/[^a-zA-Z0-9]/g, "")
        .substring(0, 3)
        .toUpperCase();
      const serialNumber = (i + 1).toString().padStart(4, "0");
      request.requestId = `${sanitizedName}-${serialNumber}`;
      await request.save();
      console.log(`Migrated request: ${request.requestId}`);
    }

    console.log("Migration completed");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
};

migrateRequestIds();
