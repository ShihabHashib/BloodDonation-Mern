import React, { useState } from "react";
import { useNotification } from "../context/NotificationContext";

const DonorRegistration = () => {
  const { showNotification } = useNotification();

  const [donorForm, setDonorForm] = useState({
    fullName: "",
    bloodType: "",
    email: "",
    phone: "",
    password: "",
  });

  // const handleDonorSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/api/donors", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(donorForm),
  //     });
  //     if (response.ok) {
  //       alert("Donor registered successfully!");
  //       setDonorForm({
  //         fullName: "",
  //         bloodType: "",
  //         email: "",
  //         phone: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error registering donor:", error);
  //     alert("Error registering donor");
  //   }
  // };

  // ... existing code ...

  const handleDonorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulating API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful registration
      console.log("Donor registration data:", donorForm);
      showNotification("success", "Registration successful!");
      setDonorForm({
        fullName: "",
        bloodType: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.error("Error registering donor:", error);
      showNotification("error", "Registration failed. Please try again later.");
    }
  };

  // ... existing code ...

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">Donor Registration</h3>
          <form onSubmit={handleDonorSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={donorForm.fullName}
                onChange={(e) =>
                  setDonorForm({ ...donorForm, fullName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Blood Type</label>
              <select
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={donorForm.bloodType}
                onChange={(e) =>
                  setDonorForm({ ...donorForm, bloodType: e.target.value })
                }
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
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={donorForm.email}
                onChange={(e) =>
                  setDonorForm({ ...donorForm, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={donorForm.phone}
                onChange={(e) =>
                  setDonorForm({ ...donorForm, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={donorForm.password}
                onChange={(e) =>
                  setDonorForm({ ...donorForm, password: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition-colors"
            >
              Register as Donor
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already a donor?{" "}
              <a href="/login" className="text-red-500 hover:text-red-600">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;
