import Donor from "../models/Donor";
import { IDonor } from "../types/donor";

class DonorService {
    async getAllDonors() {
        return await Donor.find().sort({ createdAt: -1 });
    }

    async getDonorById(id: string) {
        return await Donor.findById(id);
    }

    async createDonor(donorData: IDonor) {
        const donor = new Donor(donorData);
        return await donor.save();
    }

    async updateDonor(id: string, donorData: Partial<IDonor>) {
        return await Donor.findByIdAndUpdate(id, donorData, { new: true });
    }

    async deleteDonor(id: string) {
        return await Donor.findByIdAndDelete(id);
    }
}

export default DonorService; 