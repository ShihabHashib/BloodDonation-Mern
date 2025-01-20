import express from "express";
import patientController from "../controllers/patientController";
import { validatePatientInput } from "../middleware/validation";

const router = express.Router();

router.get("/", patientController.getAllPatients);
router.get("/:id", patientController.getPatientById);
router.post("/", validatePatientInput, patientController.createPatient);
router.patch("/:id", validatePatientInput, patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

export default router; 