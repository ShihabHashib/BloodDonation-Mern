import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-55px)] bg-white bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-90">
      <motion.div
        className="container mx-auto px-4 h-[calc(100%-100px)] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Right Content */}
        <motion.div
          className="md:w-1/2 w-full space-y-4 md:space-y-6 relative z-10 text-black md:ml-auto text-center md:text-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Small Heading */}
          <motion.div
            className="text-red-600 text-xl md:text-2xl lg:text-3xl font-medium"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Donate blood, save life!
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block"
            >
              Donate Blood And
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="block"
            >
              Inspires Others.
            </motion.span>
          </motion.h1>

          {/* CTA Button */}
          <motion.button
            className="bg-red-600 text-white py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 font-medium hover:bg-red-700 transition-colors relative overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            Explore Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Action Buttons */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 -mb-32 md:-mb-24"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="bg-red-600 text-white p-6 md:p-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1,
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Register as Patient
          </h3>
          <p className="text-sm md:text-base mb-4">
            Register as a patient in need of blood donation. Our platform
            connects you with willing donors to help save lives through timely
            blood donations.
          </p>
          <motion.a
            href="/patient-registration"
            className="text-white group flex items-center hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="mr-2">Register Now</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
        <motion.div
          className="bg-gray-900 text-white p-6 md:p-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1,
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Donate as Donor
          </h3>
          <p className="text-sm md:text-base mb-4">
            Join our community of blood donors and make a difference in
            someone's life. Your donation can help save lives and support those
            in need.
          </p>
          <motion.a
            href="/donor-registration"
            className="text-white group flex items-center hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="mr-2">Register Now</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
