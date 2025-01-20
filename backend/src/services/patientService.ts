import Patient from "../models/Patient";
import { IPatient } from "../types/patient";

class PatientService {
    async getAllPatients() {
        return await Patient.find().sort({ createdAt: -1 });
    }

    async getPatientById(id: string) {
        return await Patient.findById(id);
    }

    async createPatient(patientData: IPatient) {
        const patient = new Patient(patientData);
        return await patient.save();
    }

    async updatePatient(id: string, patientData: Partial<IPatient>) {
        return await Patient.findByIdAndUpdate(id, patientData, { new: true });
    }

    async deletePatient(id: string) {
        return await Patient.findByIdAndDelete(id);
    }
}

export default PatientService; 