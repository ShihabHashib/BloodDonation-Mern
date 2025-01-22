import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleDonation: React.FC = () => {
  const navigate = useNavigate();

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
            <h1 className="text-2xl font-bold text-white">Schedule Donation</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="donationDate"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Donation Date
              </label>
              <input
                type="date"
                id="donationDate"
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="donationTime"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>
              <select
                id="donationTime"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Select a time slot</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Donation Center
              </label>
              <select
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Select a donation center</option>
                <option value="center1">Main Street Blood Center</option>
                <option value="center2">Downtown Medical Center</option>
                <option value="center3">Community Hospital</option>
                <option value="center4">Regional Blood Bank</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                placeholder="Any special requirements or medical conditions we should know about"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Schedule
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

export default ScheduleDonation;
