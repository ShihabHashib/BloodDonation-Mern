import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  CalendarIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface RequestCardProps {
  type: string;
  location: string;
  date: string;
  urgency: string;
  bagsNeeded: number;
  index: number;
}

const RequestCard = ({
  type,
  location,
  date,
  urgency,
  bagsNeeded,
  index,
}: RequestCardProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      },
    }}
    className="border border-gray-100 p-6 hover:border-red-600 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl"
  >
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-bold text-red-600">{type}</span>
        <span className="bg-red-50 text-red-600 px-3 py-1 text-sm font-medium">
          Need within {urgency}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPinIcon className="w-5 h-5 text-gray-400" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="w-5 h-5 text-gray-400" />
          <span>Published: {date}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <BeakerIcon className="w-5 h-5 text-gray-400" />
          <span>{bagsNeeded} bags needed</span>
        </div>
      </div>

      <Link
        to={`/blood-request/${index + 1}`}
        className="mt-6 w-full bg-red-600 text-white py-2 px-4 font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
      >
        View Details
      </Link>
    </div>
  </motion.div>
);

export default RequestCard;
