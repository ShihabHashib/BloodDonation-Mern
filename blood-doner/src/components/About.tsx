import React from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaUserFriends,
  FaHospital,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: FaHandHoldingHeart,
    title: "Our Mission",
    description:
      "To ensure a safe and sustainable blood supply by connecting generous donors with patients in need, while advancing research and education in transfusion medicine.",
  },
  {
    icon: FaUserFriends,
    title: "Our Community",
    description:
      "Building a strong network of dedicated donors, healthcare professionals, and volunteers who work together to save lives through blood donation.",
  },
  {
    icon: FaHospital,
    title: "Healthcare Partners",
    description:
      "Collaborating with hospitals and medical facilities to provide timely access to safe blood products for patients across the region.",
  },
  {
    icon: FaAward,
    title: "Quality Standards",
    description:
      "Maintaining the highest standards of safety and quality in blood collection, testing, and distribution processes.",
  },
] as const;

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            About UBlood
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We are dedicated to saving lives through blood donation. Our
            platform connects donors with those in need, making the process of
            blood donation more accessible and efficient.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <feature.icon className="text-red-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Founded with a vision to bridge the gap between blood donors and
              recipients, UBlood has grown into a trusted platform for blood
              donation services. Our journey began with a simple idea: to make
              blood donation more accessible and efficient.
            </p>
            <p className="mb-4">
              Over the years, we've built a robust network of donors, healthcare
              providers, and volunteers who share our commitment to saving
              lives. Through technological innovation and community engagement,
              we've streamlined the blood donation process while maintaining the
              highest standards of safety and quality.
            </p>
            <p>
              Today, we continue to expand our services and reach, working
              tirelessly to ensure that every patient in need has access to safe
              blood products when they need them most.
            </p>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold mb-2">10K+</h3>
            <p className="text-lg">Donors Registered</p>
          </div>
          <div className="bg-red-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold mb-2">15K+</h3>
            <p className="text-lg">Lives Saved</p>
          </div>
          <div className="bg-red-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-lg">Partner Hospitals</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every drop counts. Join our community of donors and help us save
            more lives through blood donation.
          </p>
          <motion.a
            href="/donor-registration"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Become a Donor
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
