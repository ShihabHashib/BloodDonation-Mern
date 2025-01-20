import { Request, Response } from "express";
import DonorService from "../services/donorService";

class DonorController {
    private donorService: DonorService;

    constructor() {
        this.donorService = new DonorService();
    }

    getAllDonors = async (req: Request, res: Response) => {
        try {
            const donors = await this.donorService.getAllDonors();
            res.json(donors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    getDonorById = async (req: Request, res: Response) => {
        try {
            const donor = await this.donorService.getDonorById(req.params.id);
            if (!donor) {
                return res.status(404).json({ message: "Donor not found" });
            }
            res.json(donor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    createDonor = async (req: Request, res: Response) => {
        try {
            const donor = await this.donorService.createDonor(req.body);
            res.status(201).json(donor);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    updateDonor = async (req: Request, res: Response) => {
        try {
            const donor = await this.donorService.updateDonor(req.params.id, req.body);
            if (!donor) {
                return res.status(404).json({ message: "Donor not found" });
            }
            res.json(donor);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    deleteDonor = async (req: Request, res: Response) => {
        try {
            const result = await this.donorService.deleteDonor(req.params.id);
            if (!result) {
                return res.status(404).json({ message: "Donor not found" });
            }
            res.json({ message: "Donor deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default new DonorController(); 