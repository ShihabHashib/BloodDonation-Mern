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
import "./App.css";

function App() {
  return (
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
