import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DonorRegistration from "./components/DonorRegistration";
import PatientRegistration from "./components/PatientRegistration";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BloodRequest from "./components/BloodRequest";
import BloodRequestDetail from "./components/BloodRequestDetail";
import Login from "./components/auth/Login";

import "./App.css";
import Terms from "./components/Terms";
import Rules from "./components/Rules";
import ForgotPassword from "./components/auth/ForgotPassword";
import Privacy from "./components/Privacy";
import DonorProfile from "./components/DonorProfile";
import EditProfile from "./components/EditProfile";
import ScheduleDonation from "./components/ScheduleDonation";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donor-registration" element={<DonorRegistration />} />
            <Route
              path="/patient-registration"
              element={<PatientRegistration />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blood-request" element={<BloodRequest />} />
            <Route path="/blood-request/:id" element={<BloodRequestDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/donor-profile" element={<DonorProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/schedule-donation" element={<ScheduleDonation />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
