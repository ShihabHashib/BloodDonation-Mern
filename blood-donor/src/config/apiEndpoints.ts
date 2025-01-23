const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
    DONORS: {
        REGISTER: `${BASE_URL}/api/donors/register`,
        LOGIN: `${BASE_URL}/api/donors/login`,
        PROFILE: (id: string) => `${BASE_URL}/api/donors/profile/${id}`,
        UPDATE: (id: string) => `${BASE_URL}/api/donors/profile/${id}`,
    },
    PATIENTS: {
        REGISTER: `${BASE_URL}/api/patients/register`,
    },
    BLOOD_REQUESTS: `${BASE_URL}/api/blood-requests`,
    CONTACT: {
        SUBMIT: `${BASE_URL}/api/contact/submit`,
    },
    SUBSCRIPTIONS: {
        CREATE: `${BASE_URL}/api/subscriptions`,
        UNSUBSCRIBE: (id: string) => `${BASE_URL}/api/subscriptions/${id}/unsubscribe`,
    },
} as const; 