import React, { useState } from "react";

const PatientRegistration = () => {
  const [patientForm, setPatientForm] = useState({
    fullName: "",
    bloodType: "",
    urgencyLevel: "",
    hospital: "",
    requiredUnits: 0,
    mobile: "",
    alternateContact: "",
  });

  // const handlePatientSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/api/patients", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(patientForm),
  //     });
  //     if (response.ok) {
  //       alert("Patient registered successfully!");
  //       setPatientForm(
  //         fullName: "",
  //         bloodType: "",
  //         urgencyLevel: "",
  //         hospital: "",
  //         requiredUnits: 0,
  //         mobile: "",
  //         alternateContact: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error registering patient:", error);
  //     alert("Error registering patient");
  //   }
  // };

  const handlePatientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulating API call with mock response
      console.log("Patient registration data:", patientForm);

      // Simulate successful registration
      alert("Patient registered successfully!");
      setPatientForm({
        fullName: "",
        bloodType: "",
        urgencyLevel: "",
        hospital: "",
        requiredUnits: 0,
        mobile: "",
        alternateContact: "",
      });
    } catch (error) {
      console.error("Error registering patient:", error);
      alert("Error registering patient");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Blood Request Registration
          </h3>
          <form onSubmit={handlePatientSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Patient Name</label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.fullName}
                onChange={(e) =>
                  setPatientForm({ ...patientForm, fullName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Blood Type</label>
              <select
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.bloodType}
                onChange={(e) =>
                  setPatientForm({ ...patientForm, bloodType: e.target.value })
                }
                required
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Hospital Name or Location
              </label>
              <input
                type="text"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.hospital}
                onChange={(e) =>
                  setPatientForm({ ...patientForm, hospital: e.target.value })
                }
                placeholder="Enter hospital name or location address"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.mobile}
                onChange={(e) =>
                  setPatientForm({ ...patientForm, mobile: e.target.value })
                }
                placeholder="Enter patient's or attendant's mobile number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Alternate Contact Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.alternateContact}
                onChange={(e) =>
                  setPatientForm({
                    ...patientForm,
                    alternateContact: e.target.value,
                  })
                }
                placeholder="Emergency contact number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Required Units</label>
              <input
                type="number"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.requiredUnits}
                onChange={(e) =>
                  setPatientForm({
                    ...patientForm,
                    requiredUnits: parseInt(e.target.value),
                  })
                }
                min="1"
                max="10"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Need Blood Within
              </label>
              <input
                type="date"
                className="w-full p-2 border focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={patientForm.urgencyLevel}
                onChange={(e) =>
                  setPatientForm({
                    ...patientForm,
                    urgencyLevel: e.target.value,
                  })
                }
                min={new Date().toISOString().split("T")[0]}
                max={
                  new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition-colors"
            >
              Register Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;
