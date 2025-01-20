import { Request, Response, NextFunction } from "express";
import { IDonor } from "../types/donor";
import { IPatient } from "../types/patient";

export const validateDonorInput = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { fullName, bloodType, email, phone, mobile } = req.body;

    if (!fullName || !bloodType || !email || !phone || !mobile) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const validBloodTypes = [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-",
    ];
    if (!validBloodTypes.includes(bloodType)) {
        return res.status(400).json({ message: "Invalid blood type" });
    }

    next();
};

export const validatePatientInput = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        fullName,
        bloodType,
        urgencyLevel,
        hospital,
        requiredUnits,
        mobile,
    } = req.body;

    if (
        !fullName ||
        !bloodType ||
        !urgencyLevel ||
        !hospital ||
        !requiredUnits ||
        !mobile
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const validBloodTypes = [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-",
    ];
    if (!validBloodTypes.includes(bloodType)) {
        return res.status(400).json({ message: "Invalid blood type" });
    }

    const validUrgencyLevels = ["high", "medium", "low"];
    if (!validUrgencyLevels.includes(urgencyLevel)) {
        return res.status(400).json({ message: "Invalid urgency level" });
    }

    if (requiredUnits < 1) {
        return res
            .status(400)
            .json({ message: "Required units must be greater than 0" });
    }

    next();
}; 