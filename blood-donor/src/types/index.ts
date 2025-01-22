// User related types
export interface User {
    id: string;
    name: string;
    email: string;
    bloodType: string;
    phone: string;
    address: string;
    lastDonation?: string;
    totalDonations?: number;
}

// Blood Request related types
export interface BloodRequest {
    id: string;
    type: string;
    location: string;
    date: string;
    urgency: string;
    bagsNeeded: number;
    patientName: string;
    contactNumber: string;
    alternateContact?: string;
    hospitalAddress: string;
    additionalNotes?: string;
    postedBy: string;
    status: 'active' | 'fulfilled' | 'expired';
}

// Donor related types
export interface DonorForm {
    fullName: string;
    bloodType: string;
    email: string;
    phone: string;
    password: string;
}

// Patient related types
export interface PatientForm {
    fullName: string;
    bloodType: string;
    urgencyLevel: string;
    hospital: string;
    requiredUnits: number;
    mobile: string;
    alternateContact?: string;
    hospitalAddress: string;
    additionalNotes?: string;
    postedBy: string;
}

// Authentication related types
export interface AuthState {
    isLoggedIn: boolean;
    userType?: 'donor' | 'patient' | 'admin';
    user?: User;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

// Notification related types
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
}

// Blood type constants
export const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;
export type BloodType = typeof BLOOD_TYPES[number];

// Donation Schedule related types
export interface DonationSchedule {
    id: string;
    donorId: string;
    date: string;
    time: string;
    location: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    notes?: string;
}

// Contact form related types
export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface IBloodRequest {
    _id: string;
    requestId: string;
    patientName: string;
    bloodType: string;
    units: number;
    hospital: string;
    location: string;
    urgency: '3' | '7' | '15';
    contactNumber: string;
    status: 'pending' | 'fulfilled' | 'cancelled';
    requester: string | {
        _id: string;
        name: string;
    };
    additionalNotes?: string;
    createdAt: string;
    updatedAt: string;
    postedBy: string;
} 