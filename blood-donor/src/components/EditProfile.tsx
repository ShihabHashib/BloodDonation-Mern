import React from "react";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();

  // This would typically come from your auth/state management system
  const donorData = {
    name: "John Doe",
    bloodType: "O+",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, State",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/donor-profile");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 p-6">
            <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={donorData.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
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
                defaultValue={donorData.bloodType}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
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
                defaultValue={donorData.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
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
                defaultValue={donorData.phone}
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
                defaultValue={donorData.address}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => navigate("/donor-profile")}
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
