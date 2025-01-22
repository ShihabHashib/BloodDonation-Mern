const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
    PATIENTS: {
        REGISTER: `${BASE_URL}/api/patients/register`,
    },
    BLOOD_REQUESTS: `${BASE_URL}/api/blood-requests`,
} as const; 