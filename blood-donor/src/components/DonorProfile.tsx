import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Donor } from "../types";
import { donorService } from "../utils/apiService";

const DonorProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [donorData, setDonorData] = useState<Donor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await donorService.getProfile(user?.id || "");
        setDonorData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [user?.id]);

  const handleUpdateProfile = async (updateData: Partial<Donor>) => {
    try {
      const updatedData = await donorService.updateProfile(
        user?.id || "",
        updateData
      );
      setDonorData(updatedData);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const calculateProgress = (lastDonationDate: string): number => {
    const lastDonation = new Date(lastDonationDate);
    const nextEligible = new Date(lastDonation);
    nextEligible.setMonth(nextEligible.getMonth() + 3); // 3 months waiting period

    const today = new Date();
    const totalDays = 90; // 3 months in days
    const daysPassed = Math.floor(
      (today.getTime() - lastDonation.getTime()) / (1000 * 60 * 60 * 24)
    );

    const progress = (daysPassed / totalDays) * 100;
    return Math.min(Math.max(progress, 0), 100); // Clamp between 0 and 100
  };

  const calculateDaysRemaining = (lastDonationDate: string): number => {
    const lastDonation = new Date(lastDonationDate);
    const nextEligible = new Date(lastDonation);
    nextEligible.setMonth(nextEligible.getMonth() + 3);

    const today = new Date();
    if (today < nextEligible) {
      return Math.ceil(
        (nextEligible.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
    }
    return 0; // Return 0 if already eligible
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-red-600 p-6">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl text-red-600 font-bold">
                  {donorData?.bloodType}
                </span>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">{donorData?.fullName}</h1>
                <p className="text-red-100">Regular Donor</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <p className="mt-1">{donorData?.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <p className="mt-1">{donorData?.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Address
                  </label>
                  <p className="mt-1">{donorData?.address}</p>
                </div>
              </div>
            </div>

            {/* Donation History */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Donation History</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Last Donation
                    </label>
                    <p className="mt-1">{donorData?.lastDonation}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Total Donations
                    </label>
                    <p className="mt-1">{donorData?.totalDonations} times</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Next Eligible Donation
                    </label>
                    <p className="mt-1 text-green-600 font-medium">
                      2024-04-15
                    </p>
                  </div>
                </div>

                {/* Donation Eligibility Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Last Donation</span>
                    <span>Next Eligible Date</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-600 rounded-full transition-all duration-500"
                      style={{
                        width: `${calculateProgress(
                          donorData?.lastDonation || ""
                        )}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {calculateDaysRemaining(donorData?.lastDonation || "") === 0
                      ? "You are eligible to donate!"
                      : `${calculateDaysRemaining(
                          donorData?.lastDonation || ""
                        )} days remaining`}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/edit-profile")}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Edit Profile
              </button>
              <button
                onClick={() => navigate("/schedule-donation")}
                className="bg-white text-red-600 px-6 py-2 rounded-md border border-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Schedule Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;
