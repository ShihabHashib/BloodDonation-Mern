import express from "express";
import donorController from "../controllers/donorController";
import { validateDonorInput } from "../middleware/validation";

const router = express.Router();

router.get("/", donorController.getAllDonors);
router.get("/:id", donorController.getDonorById);
router.post("/", validateDonorInput, donorController.createDonor);
router.patch("/:id", validateDonorInput, donorController.updateDonor);
router.delete("/:id", donorController.deleteDonor);

export default router; 