import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import DonorRegistration from "./components/DonorRegistration";
import PatientRegistration from "./components/PatientRegistration";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header/Navigation */}
        <nav className="bg-red-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <Link to="/" className="text-2xl font-bold">
                  UBlood
                </Link>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-red-200 transition-colors">
                  Home
                </Link>
                <Link
                  to="/donor-registration"
                  className="hover:text-red-200 transition-colors"
                >
                  Donor Registration
                </Link>
                <Link
                  to="/patient-registration"
                  className="hover:text-red-200 transition-colors"
                >
                  Patient Registration
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route
            path="/patient-registration"
            element={<PatientRegistration />}
          />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">About Us</h4>
                <p className="text-gray-400">
                  We are dedicated to connecting blood donors with patients in
                  need, making the process of blood donation easier and more
                  accessible.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/donor-registration" className="hover:text-white">
                      Donor Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-registration"
                      className="hover:text-white"
                    >
                      Patient Registration
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-400">
                  Email: info@blooddonation.com
                  <br />
                  Phone: +1 234 567 890
                  <br />
                  Address: 123 Blood Drive, Medical City
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
