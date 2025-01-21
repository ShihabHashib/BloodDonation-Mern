import React from "react";
import { motion, useInView } from "framer-motion";
import {
  AcademicCapIcon,
  FireIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { icon: AcademicCapIcon, value: "25", label: "YEAR EXPERIENCE" },
  { icon: FireIcon, value: "3225", label: "HAPPY DONORS" },
  { icon: TrophyIcon, value: "90", label: "TOTAL AWARDS" },
  { icon: UsersIcon, value: "3168", label: "HAPPY RECIPIENT" },
] as const;

const StatisticsSection = () => {
  return (
    <div className="relative bg-black text-white py-20">
      <motion.div
        className="absolute inset-0 bg-[url('/donation.jpg')] bg-cover bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatItemProps {
  icon: (typeof stats)[number]["icon"];
  value: string;
  label: string;
  index: number;
}

const StatItem = ({ icon: Icon, value, label, index }: StatItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="flex justify-center mb-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <Icon className="w-12 h-12 text-red-600" />
      </motion.div>
      <motion.div
        className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
      >
        {value}
      </motion.div>
      <motion.div
        className="text-sm tracking-wider font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default StatisticsSection;
