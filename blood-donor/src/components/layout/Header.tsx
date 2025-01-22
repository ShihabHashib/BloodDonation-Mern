import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, userType, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-red-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="UBlood Logo" className="h-8 w-auto" />
            <span className="text-white text-xl font-bold tracking-tight">
              UBlood
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-gray-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/blood-request"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blood Requests
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                {userType === "donor" && (
                  <Link
                    to="/donor-profile"
                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-white text-red-600 px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/donor-registration"
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Become a Donor
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-red-600 px-4 py-2 text-sm font-medium hover:bg-gray-100"
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blood-request"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blood Requests
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  {userType === "donor" && (
                    <Link
                      to="/donor-profile"
                      className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/donor-registration"
                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
