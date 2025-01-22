import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">UBlood</h3>
            <p className="text-gray-200 mb-4">
              Connecting lives through the gift of blood donation. Every drop
              counts, every donor matters.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-red-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/donor-registration"
                  className="text-gray-200 hover:text-red-400 transition-colors"
                >
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-registration"
                  className="text-gray-200 hover:text-red-400 transition-colors"
                >
                  Request Blood
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/rules" className="hover:text-white">
                  Donation Rules
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-red-400" />
                <span className="text-gray-200">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-400" />
                <span className="text-gray-200">info@blooddonation.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-400" />
                <span className="text-gray-200">
                  123 Blood Drive, Medical City
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700 mt-12 pt-8 text-center">
          <p className="text-gray-200">
            © {new Date().getFullYear()} UBlood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
