import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_ENDPOINTS } from "../config/apiEndpoints";

interface ProfileFormData {
  fullName: string;
  bloodType: string;
  email: string;
  phone: string;
  address: string;
}

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: "",
    bloodType: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) {
        navigate("/login");
        return;
      }

      try {
        console.log(
          "Fetching profile from:",
          API_ENDPOINTS.DONORS.PROFILE(user.id)
        );
        const response = await fetch(API_ENDPOINTS.DONORS.PROFILE(user.id), {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Profile fetch failed:", {
            status: response.status,
            statusText: response.statusText,
            responseText: errorText,
          });
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("Profile data received:", data);
        setFormData({
          fullName: data.fullName || data.donor?.fullName || "",
          bloodType: data.bloodType || data.donor?.bloodType || "",
          email: data.email || data.donor?.email || "",
          phone: data.phone || data.donor?.phone || "",
          address: data.address || data.donor?.address || "",
        });
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("Failed to load profile data");
      }
    };

    fetchProfile();
  }, [user, navigate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) return;

    setIsLoading(true);
    setError(null);

    try {
      console.log("Updating profile at:", API_ENDPOINTS.DONORS.UPDATE(user.id));
      const response = await fetch(API_ENDPOINTS.DONORS.UPDATE(user.id), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          donor: {
            fullName: formData.fullName,
            bloodType: formData.bloodType,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Update failed:", {
          status: response.status,
          statusText: response.statusText,
          responseText: errorText,
        });
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("Update successful:", data);
      navigate("/donor-profile");
    } catch (err) {
      console.error("Update error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to update profile. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 p-6">
            <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
          </div>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 border-l-4 border-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="bloodType"
                className="block text-sm font-medium text-gray-700"
              >
                Blood Type
              </label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`flex-1 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/donor-profile")}
                disabled={isLoading}
                className="flex-1 bg-white text-red-600 px-6 py-2 rounded-md border border-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
