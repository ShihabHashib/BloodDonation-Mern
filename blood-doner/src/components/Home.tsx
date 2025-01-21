import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  FireIcon,
  TrophyIcon,
  UsersIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  // Add fade-in-up animation variant
  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  // Add stagger container variant
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Show/hide scroll-to-top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up smooth scrolling behavior
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-55px)] bg-white bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white before:opacity-90">
        <motion.div
          className="container mx-auto px-4 h-[calc(100%-100px)] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Right Content */}
          <motion.div
            className="md:w-1/2 space-y-6 relative z-10 text-black ml-auto text-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small Heading */}
            <motion.div
              className="text-red-600 text-3xl font-medium"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Donate blood, save life!
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-7xl font-bold leading-tight"
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
              className="bg-red-600 text-white py-5 px-10 font-medium hover:bg-red-700 transition-colors relative overflow-hidden group"
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
          className="absolute bottom-0 left-0 right-0 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 -mb-24"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="bg-red-600 text-white p-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold mb-4">Register as Patient</h3>
            <p className="mb-4">
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
            className="bg-gray-900 text-white p-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold mb-4">Donate as Donor</h3>
            <p className="mb-4">
              Join our community of blood donors and make a difference in
              someone's life. Your donation can help save lives and support
              those in need.
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

      {/* Info Cards Section */}
      <motion.div
        className="container mx-auto px-4 pt-48 pb-32"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Become a Donate Card */}
          <motion.div
            className="bg-white p-8 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-20 h-20 bg-black mx-auto mb-6 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 transform group-hover:rotate-6"
              whileHover={{ scale: 1.1, rotate: 12 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </motion.svg>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Become a donate
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join our community of blood donors and become a lifesaver. Your
              donation can make a real difference in someone's life. Regular
              blood donation is safe, easy, and tremendously impactful.
            </motion.p>
            <motion.button
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-all duration-300 group/btn mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Read More</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform"
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
            </motion.button>
          </motion.div>

          {/* Why Give Blood Card */}
          <motion.div
            className="bg-white p-8 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-20 h-20 bg-black mx-auto mb-6 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 transform group-hover:rotate-6"
              whileHover={{ scale: 1.1, rotate: 12 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Why give blood?
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Every day, thousands of patients need blood transfusions to
              survive. Your donation can help accident victims, surgery
              patients, and those fighting serious illnesses. One donation can
              save up to three lives.
            </motion.p>
            <motion.button
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-all duration-300 group/btn mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Read More</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform"
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
            </motion.button>
          </motion.div>

          {/* How Donations Help Card */}
          <motion.div
            className="bg-white p-8 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center group hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-20 h-20 bg-black mx-auto mb-6 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 transform group-hover:rotate-6"
              whileHover={{ scale: 1.1, rotate: 12 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white transform group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </motion.svg>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              How Donations Help?
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Blood donations support various medical treatments including
              surgeries, cancer care, chronic illnesses, and emergency response.
              Your contribution ensures hospitals can provide lifesaving care
              when it's needed most.
            </motion.p>
            <motion.button
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-all duration-300 group/btn mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Read More</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform"
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
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <div className="relative bg-black text-white py-20 bg-[url('/donation.jpg')] bg-cover bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-black/80">
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Years Experience */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <AcademicCapIcon className="w-12 h-12 text-red-600" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                25
              </motion.div>
              <motion.div
                className="text-sm tracking-wider font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                YEAR EXPERIENCE
              </motion.div>
            </motion.div>

            {/* Happy Donors */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <FireIcon className="w-12 h-12 text-red-600" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                3225
              </motion.div>
              <motion.div
                className="text-sm tracking-wider font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                HAPPY DONORS
              </motion.div>
            </motion.div>

            {/* Total Awards */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <TrophyIcon className="w-12 h-12 text-red-600" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              >
                90
              </motion.div>
              <motion.div
                className="text-sm tracking-wider font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                TOTAL AWARDS
              </motion.div>
            </motion.div>

            {/* Happy Recipients */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <UsersIcon className="w-12 h-12 text-red-600" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                3168
              </motion.div>
              <motion.div
                className="text-sm tracking-wider font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                HAPPY RECIPIENT
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Current Blood Request Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Current Blood Request
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                type: "B+",
                location: "Washington, USA",
                date: "13.02.2025",
                urgency: "2 Days",
              },
              {
                type: "O+",
                location: "Washington, USA",
                date: "15.02.2025",
                urgency: "4 Days",
              },
              {
                type: "A+",
                location: "Washington, USA",
                date: "14.02.2025",
                urgency: "1 Day",
              },
              {
                type: "A-",
                location: "Washington, USA",
                date: "16.02.2025",
                urgency: "3 Days",
              },
              {
                type: "AB+",
                location: "Washington, USA",
                date: "18.02.2025",
                urgency: "5 Days",
              },
              {
                type: "B-",
                location: "Washington, USA",
                date: "17.02.2025",
                urgency: "2 Days",
              },
              {
                type: "O-",
                location: "Washington, USA",
                date: "19.02.2025",
                urgency: "6 Days",
              },
              {
                type: "AB-",
                location: "Washington, USA",
                date: "20.02.2025",
                urgency: "7 Days",
              },
            ].map((request, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger effect
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="border border-gray-100 p-6 hover:border-red-600 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl"
              >
                <div className="flex flex-col">
                  {/* Blood Group */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      className="text-3xl font-bold text-red-600"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {request.type}
                    </motion.span>
                    <motion.span
                      className="bg-red-50 text-red-600 px-3 py-1 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Need within {request.urgency}
                    </motion.span>
                  </div>

                  {/* Location & Date */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{request.location}</span>
                    </div>

                    {/* Published Date */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Published: {request.date}</span>
                    </div>
                  </motion.div>

                  {/* Contact Button */}
                  <motion.button
                    className="mt-6 w-full bg-red-600 text-white py-2 px-4 font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Now
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
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
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Now Section */}
      <div className="relative bg-black text-white py-20 bg-[url('/contact.jpg')] bg-cover bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/90 before:to-black/70">
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h4
                className="text-red-600 text-sm font-bold tracking-wider mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CONTACT US NOW
              </motion.h4>
              <motion.h2
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Save Lives?
              </motion.h2>
              <motion.p
                className="text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Your donation can make a significant impact. Contact us now to
                schedule your donation or learn more about how you can help save
                lives.
              </motion.p>
            </motion.div>

            {/* Contact Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Phone Card */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600 transition-all duration-300 group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <PhoneIcon className="w-6 h-6 text-red-600 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-gray-400 text-sm">Call us directly</p>
                  </div>
                </motion.div>
                <motion.a
                  href="tel:3335559090"
                  className="text-xl font-semibold text-red-600 hover:text-red-500"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  333 555 9090
                </motion.a>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600 transition-all duration-300 group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <EnvelopeIcon className="w-6 h-6 text-red-600 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-400 text-sm">Drop us a line</p>
                  </div>
                </motion.div>
                <motion.a
                  href="mailto:donate@gmail.com"
                  className="text-xl font-semibold text-red-600 hover:text-red-500"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Donate@gmail.com
                </motion.a>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600 transition-all duration-300 group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <MapPinIcon className="w-6 h-6 text-red-600 group-hover:text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-400 text-sm">Visit our center</p>
                  </div>
                </motion.div>
                <motion.p
                  className="text-xl font-semibold text-red-600"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  New York - 1075 Firs Avenue
                </motion.p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                href="/donor-registration"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 font-semibold hover:bg-red-700 transition-colors group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Donating Now
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h4
              className="text-red-600 text-sm font-bold tracking-wider mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              GET YOUR ANSWERS
            </motion.h4>
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Find answers to common questions about blood donation,
              eligibility, and the donation process
            </motion.p>
          </motion.div>

          {/* FAQ Grid */}
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Who can donate blood?",
                a: "Most people in good health, aged between 17-65, weighing at least 110 pounds can donate blood. Detailed eligibility criteria will be checked before donation.",
                icon: "❤️",
              },
              {
                q: "How often can I donate blood?",
                a: "You can donate whole blood every 56 days (8 weeks). Platelet donors can give every 7 days up to 24 times per year.",
                icon: "🕒",
              },
              {
                q: "Is blood donation safe?",
                a: "Yes, blood donation is completely safe. New, sterile equipment is used for each donor, and the process is conducted by trained professionals.",
                icon: "🏥",
              },
              {
                q: "How long does it take?",
                a: "The actual blood donation takes about 8-10 minutes. However, the entire process, including registration and health screening, takes about an hour.",
                icon: "⏱️",
              },
              {
                q: "What should I eat before donating?",
                a: "Have a healthy meal and plenty of fluids before donating. Avoid fatty foods and maintain good iron levels in your diet.",
                icon: "🍎",
              },
              {
                q: "How much blood is taken?",
                a: "During a whole blood donation, approximately one pint (about 500 ml) of blood is collected, which is about 10% of your total blood volume.",
                icon: "💉",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{faq.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
