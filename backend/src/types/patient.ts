export interface IPatient {
    fullName: string;
    bloodType: string;
    urgencyLevel: string;
    hospital: string;
    requiredUnits: number;
    mobile: string;
    alternateContact?: string;
    status?: string;
    createdAt?: Date;
} 