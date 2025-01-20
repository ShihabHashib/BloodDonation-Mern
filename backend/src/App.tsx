import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface DonorCreate {
  name: string;
  bloodType: string;
  contactNumber: string;
  lastDonationDate: string;
}

// Routes
app.get("/api/donors", async (req: Request, res: Response) => {
  try {
    const donors = await prisma.donor.findMany();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donors" });
  }
});

app.post("/api/donors", async (req: Request, res: Response) => {
  try {
    const donorData: DonorCreate = req.body;

    // Basic validation
    if (!donorData.name || !donorData.bloodType || !donorData.contactNumber) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const donor = await prisma.donor.create({
      data: donorData,
    });

    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create donor" });
  }
});

app.put("/api/donors/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const donorData: Partial<DonorCreate> = req.body;

    const donor = await prisma.donor.update({
      where: { id: Number(id) },
      data: donorData,
    });

    res.json(donor);
  } catch (error) {
    res.status(500).json({ error: "Failed to update donor" });
  }
});

app.delete("/api/donors/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.donor.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donor" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
