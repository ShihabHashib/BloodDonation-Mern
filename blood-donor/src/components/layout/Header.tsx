import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.5C7.313 21.5 3.5 17.687 3.5 13C3.5 8.313 12 2.5 12 2.5C12 2.5 20.5 8.313 20.5 13C20.5 17.687 16.687 21.5 12 21.5Z" />
            </svg>
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight hover:text-red-100"
            >
              UBlood
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium hover:text-red-100 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/donor-registration"
              className="font-medium hover:text-red-100 transition-colors duration-200"
            >
              Become a Donor
            </Link>

            <Link
              to="/blood-request"
              className="font-medium hover:text-red-100 transition-colors duration-200"
            >
              Blood Requests
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-red-100 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-red-100 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/patient-registration"
              className="px-4 py-2 bg-white text-red-600 font-medium hover:bg-red-50 transition-colors duration-200"
            >
              Need Blood
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
