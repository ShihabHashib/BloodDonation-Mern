import React from "react";
import { motion } from "framer-motion";

const Rules = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Blood Donation Rules</h1>

          <div className="bg-white shadow p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Basic Requirements
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Age: 18-65 years</li>
                <li>Weight: Minimum 45kg</li>
                <li>Hemoglobin: Minimum 12.5g/dl</li>
                <li>Blood Pressure: 110/60 to 160/100 mm Hg</li>
                <li>Temperature: Normal body temperature</li>
                <li>Pulse: Between 50 and 100 regular</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Donation Frequency
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Whole blood donation: Every 3 months</li>
                <li>Plasma donation: Every 28 days</li>
                <li>Platelet donation: Every 7 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Health Conditions</h2>
              <p className="text-gray-600 mb-4">You cannot donate if you:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Have a cold, flu, or other active infection</li>
                <li>Are pregnant or have given birth in the last 6 months</li>
                <li>Have had major surgery in the last 6 months</li>
                <li>Have received blood transfusion in the last year</li>
                <li>
                  Have certain medical conditions or take specific medications
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Before Donation</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Get adequate sleep</li>
                <li>Eat a healthy meal within 3 hours of donation</li>
                <li>Drink plenty of water</li>
                <li>Bring valid ID and list of medications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">After Donation</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Rest for 10-15 minutes</li>
                <li>Drink extra fluids</li>
                <li>Avoid strenuous activities for 24 hours</li>
                <li>Keep the bandage on for several hours</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rules;
