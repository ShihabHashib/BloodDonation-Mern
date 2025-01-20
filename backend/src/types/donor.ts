export interface IDonor {
    fullName: string;
    bloodType: string;
    email: string;
    phone: string;
    mobile: string;
    lastDonationDate?: Date;
    status?: string;
    createdAt?: Date;
} 