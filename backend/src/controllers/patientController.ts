import { Request, Response } from "express";
import PatientService from "../services/patientService";

class PatientController {
    private patientService: PatientService;

    constructor() {
        this.patientService = new PatientService();
    }

    getAllPatients = async (req: Request, res: Response) => {
        try {
            const patients = await this.patientService.getAllPatients();
            res.json(patients);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    getPatientById = async (req: Request, res: Response) => {
        try {
            const patient = await this.patientService.getPatientById(req.params.id);
            if (!patient) {
                return res.status(404).json({ message: "Patient not found" });
            }
            res.json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    createPatient = async (req: Request, res: Response) => {
        try {
            const patient = await this.patientService.createPatient(req.body);
            res.status(201).json(patient);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    updatePatient = async (req: Request, res: Response) => {
        try {
            const patient = await this.patientService.updatePatient(
                req.params.id,
                req.body
            );
            if (!patient) {
                return res.status(404).json({ message: "Patient not found" });
            }
            res.json(patient);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    deletePatient = async (req: Request, res: Response) => {
        try {
            const result = await this.patientService.deletePatient(req.params.id);
            if (!result) {
                return res.status(404).json({ message: "Patient not found" });
            }
            res.json({ message: "Patient deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default new PatientController(); 