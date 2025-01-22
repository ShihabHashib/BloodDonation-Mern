import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import RequestCard from "./cards/RequestCard";
import { BLOOD_TYPES, URGENCY_OPTIONS } from "../data";
import { useBloodRequest } from "../context/BloodRequestContext";
import { IBloodRequest } from "../types";
import LoadingSpinner from "./cards/LoadingSpinner";
import { useNotification } from "../context/NotificationContext";
import { useHttpClient } from "../hooks/useHttpClient";

const BloodRequestPage: React.FC = () => {
  const { bloodRequests, getBloodRequests } = useBloodRequest();
  const { showNotification } = useNotification();
  const { isLoading, error, sendRequest } = useHttpClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [filteredRequests, setFilteredRequests] = useState<IBloodRequest[]>([]);

  // Create ref for the loader element
  const loaderRef = React.useRef(null);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (
          target.isIntersecting &&
          !isLoading &&
          displayCount < filteredRequests.length
        ) {
          setDisplayCount((prev) =>
            Math.min(prev + 6, filteredRequests.length)
          );
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, displayCount, filteredRequests.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBloodRequests();
      } catch (error) {
        console.error("Error fetching blood requests:", error);
        showNotification("error", "Failed to load blood requests");
      }
    };
    fetchData();
  }, [getBloodRequests, showNotification]);

  useEffect(() => {
    const filtered = bloodRequests.filter((request: IBloodRequest) => {
      const matchesSearch =
        request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.bloodType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBloodType = selectedBloodType
        ? request.bloodType === selectedBloodType
        : true;

      const matchesUrgency = selectedUrgency
        ? (() => {
            const requestDays = parseInt(request.urgency);
            const selectedDays = parseInt(selectedUrgency);
            return requestDays <= selectedDays;
          })()
        : true;

      return matchesSearch && matchesBloodType && matchesUrgency;
    });

    setFilteredRequests(filtered);
  }, [searchTerm, selectedBloodType, selectedUrgency, bloodRequests]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Post Request Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold">Blood Requests</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-2 shadow-md hover:bg-red-700 transition-colors duration-200"
              onClick={() => (window.location.href = "/patient-registration")}
            >
              Post Blood Request
            </motion.button>
          </div>
          <p className="text-gray-600 text-left">
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
                  {BLOOD_TYPES.map((type) => (
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
                  <option value="3">Within 3 days</option>
                  <option value="7">Within 7 days</option>
                  <option value="15">Within 15 days</option>
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
              {isLoading ? (
                <LoadingSpinner />
              ) : bloodRequests.length > 0 ? (
                <>
                  {filteredRequests.length > 0 ? (
                    <>
                      {filteredRequests
                        .slice(0, displayCount)
                        .map((request, index) => (
                          <RequestCard key={index} {...request} index={index} />
                        ))}
                      {displayCount < filteredRequests.length && (
                        <div
                          ref={loaderRef}
                          className="col-span-full flex justify-center py-4"
                        >
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : (
                            <div className="h-8" /> // Invisible element to trigger intersection
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                      No blood requests match your search criteria.
                    </div>
                  )}
                </>
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No blood requests found.
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequestPage;
