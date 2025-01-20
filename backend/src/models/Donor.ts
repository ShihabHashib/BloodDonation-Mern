import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    bloodType: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    mobile: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Donor', donorSchema); 