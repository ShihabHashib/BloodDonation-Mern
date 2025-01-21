import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import RequestCard from "./cards/RequestCard";

// Using the same requests data from BloodRequestSection
const requests = [
  {
    type: "B+",
    location: "New York, USA",
    date: "13.02.2025",
    urgency: "2 Days",
    bagsNeeded: 3,
  },
  {
    type: "A+",
    location: "Los Angeles, USA",
    date: "14.02.2025",
    urgency: "3 Days",
    bagsNeeded: 2,
  },
  {
    type: "O-",
    location: "Chicago, USA",
    date: "15.02.2025",
    urgency: "5 Days",
    bagsNeeded: 1,
  },
  {
    type: "AB+",
    location: "Houston, USA",
    date: "16.02.2025",
    urgency: "7 Days",
    bagsNeeded: 4,
  },
  {
    type: "B-",
    location: "Miami, USA",
    date: "17.02.2025",
    urgency: "10 Days",
    bagsNeeded: 2,
  },
  {
    type: "O+",
    location: "Seattle, USA",
    date: "18.02.2025",
    urgency: "15 Days",
    bagsNeeded: 3,
  },
  {
    type: "A-",
    location: "Boston, USA",
    date: "19.02.2025",
    urgency: "1 Days",
    bagsNeeded: 2,
  },
  {
    type: "AB-",
    location: "Denver, USA",
    date: "20.02.2025",
    urgency: "6 Days",
    bagsNeeded: 1,
  },
] as const;

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const;
const urgencyOptions = ["3 Days", "7 Days", "15 Days"] as const;

const BloodRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesSearch =
        request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBloodType = selectedBloodType
        ? request.type === selectedBloodType
        : true;

      const matchesDate = selectedDate ? request.date === selectedDate : true;

      const matchesUrgency = selectedUrgency
        ? (() => {
            const requestDays = parseInt(request.urgency);
            const selectedDays = parseInt(selectedUrgency);

            switch (selectedDays) {
              case 3:
                return requestDays <= 3;
              case 7:
                return requestDays <= 7;
              case 15:
                return requestDays <= 15;
              default:
                return true;
            }
          })()
        : true;

      return matchesSearch && matchesBloodType && matchesDate && matchesUrgency;
    });
  }, [searchTerm, selectedBloodType, selectedDate, selectedUrgency]);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blood Requests</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find and respond to blood donation requests in your area. Every
            donation can help save a life.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Search and Filters */}
          <div className="md:w-1/3">
            <div className="bg-white shadow-md p-6 mb-8 sticky top-4">
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by location or blood type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50"
                >
                  <FunnelIcon className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Filter Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {/* Blood Type Filter */}
                <select
                  value={selectedBloodType}
                  onChange={(e) => setSelectedBloodType(e.target.value)}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Blood Types</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Urgency Filter */}
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">All Urgency Levels</option>
                  {urgencyOptions.map((urgency) => (
                    <option key={urgency} value={urgency.split(" ")[0]}>
                      {urgency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Right Side - Results Section */}
          <div className="md:w-2/3">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request, index) => (
                  <RequestCard key={index} {...request} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No blood requests match your search criteria.
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequest;
