import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import RequestCard from "../cards/RequestCard";
import { IBloodRequest } from "../../types";
import { useBloodRequest } from "../../context/BloodRequestContext";
import LoadingSpinner from "../cards/LoadingSpinner";

const BloodRequestSection = () => {
  const { bloodRequests, getBloodRequests } = useBloodRequest();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        await getBloodRequests();
      } catch (error) {
        console.error("Error fetching blood requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [getBloodRequests]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Current Blood Requests
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
          {bloodRequests.slice(0, 8).map((request: IBloodRequest) => (
            <RequestCard key={request._id} {...request} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BloodRequestSection;
