import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    bloodType: { type: String, required: true },
    urgencyLevel: { type: String, required: true },
    hospital: { type: String, required: true },
    requiredUnits: { type: Number, required: true },
    mobile: { type: String, required: true },
    alternateContact: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Patient', patientSchema); 