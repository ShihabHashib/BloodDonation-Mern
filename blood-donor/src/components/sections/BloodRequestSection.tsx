import React from "react";
import { motion } from "framer-motion";
import RequestCard from "../cards/RequestCard";

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

const BloodRequestSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Current Blood Request
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
          {requests.slice(0, 8).map((request, index) => (
            <RequestCard key={index} {...request} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BloodRequestSection;
