import { AuthUser } from "../types";

interface RequestOptions {
    headers: Record<string, string>;
    body?: string;
    method: string;
}

interface ApiResponse {
    message?: string;
    [key: string]: any;
}

interface StoredUser extends AuthUser {
    token: string;
}

export const makeAuthenticatedRequest = async <T = ApiResponse>(
    url: string,
    method: string,
    data?: Record<string, unknown>
): Promise<T> => {
    try {
        // Get user data from localStorage
        const userString = localStorage.getItem("user");
        if (!userString) {
            throw new Error("Authentication failed");
        }

        // Parse and validate user data
        const user = JSON.parse(userString) as StoredUser;
        if (!user?.token) {
            throw new Error("Authentication failed");
        }

        // Prepare request options
        const options: RequestOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        };

        // Add body for non-GET requests
        if (method !== "GET" && data) {
            options.body = JSON.stringify(data);
        }

        // Make the request
        console.log("Making request to:", url, "with options:", {
            ...options,
            headers: { ...options.headers, Authorization: "Bearer [REDACTED]" },
        });

        const response = await fetch(url, options);

        // Handle response
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Request failed:", {
                status: response.status,
                statusText: response.statusText,
                error: errorData,
            });

            if (response.status === 401) {
                localStorage.removeItem("user"); // Clear invalid token
                throw new Error("Authentication failed");
            }

            throw new Error(errorData.message || "Request failed");
        }

        return response.json();
    } catch (error) {
        console.error("API request failed:", error);
        if (error instanceof Error && error.message === "Authentication failed") {
            localStorage.removeItem("user"); // Clear invalid token
        }
        throw error;
    }
}; 