import { API_ENDPOINTS } from "../config/apiEndpoints";
import { Donor } from "../types";

// Generic authenticated request handler
export const makeAuthenticatedRequest = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${storedUser.token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Request failed");
    }

    return response.json();
};

// Donor-specific API calls
export const donorService = {
    getProfile: (id: string) =>
        makeAuthenticatedRequest<Donor>(API_ENDPOINTS.DONORS.PROFILE(id)),

    updateProfile: (id: string, data: Partial<Donor>) =>
        makeAuthenticatedRequest<Donor>(API_ENDPOINTS.DONORS.UPDATE(id), {
            method: "PATCH",
            body: JSON.stringify(data),
        }),
}; 