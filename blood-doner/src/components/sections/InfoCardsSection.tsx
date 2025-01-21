import React from "react";
import { motion } from "framer-motion";
import {
  PlusIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    title: "Become a donate",
    description:
      "Join our community of blood donors and become a lifesaver. Your donation can make a real difference in someone's life.",
    icon: PlusIcon,
  },
  {
    title: "Why give blood?",
    description:
      "Every day, thousands of patients need blood transfusions to survive. Your donation can help save up to three lives.",
    icon: QuestionMarkCircleIcon,
  },
  {
    title: "How Donations Help?",
    description:
      "Blood donations support various medical treatments including surgeries, cancer care, and emergency response.",
    icon: HeartIcon,
  },
] as const;

const InfoCardsSection = () => {
  return (
    <motion.div
      className="container mx-auto px-4 pt-48 pb-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const InfoCard = ({ title, description, icon: Icon, index }: InfoCardProps) => (
  <motion.div
    className="bg-white p-8 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 transition-all duration-300 ease-in-out"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div
      className="w-20 h-20 bg-black mx-auto mb-6 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 transform group-hover:rotate-6"
      whileHover={{ scale: 1.1, rotate: 12 }}
    >
      <Icon className="w-10 h-10 text-white" />
    </motion.div>
    <motion.h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
      {title}
    </motion.h3>
    <motion.p className="text-gray-600 mb-8 leading-relaxed">
      {description}
    </motion.p>
    <motion.button
      className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Read More
    </motion.button>
  </motion.div>
);

export default InfoCardsSection;
