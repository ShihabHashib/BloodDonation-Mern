import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          <div className="bg-white shadow p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing and using the UBlood platform, you agree to be
                bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Eligibility for Blood Donation
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Must be between 18-65 years of age</li>
                <li>Weight should be above 45kg</li>
                <li>Should not have donated blood in the last 3 months</li>
                <li>Must be in good health condition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
              <p className="text-gray-600">
                We respect your privacy and protect your personal information.
                All data collected is used solely for blood donation purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain confidentiality of account credentials</li>
                <li>Report any unauthorized access</li>
                <li>Follow blood donation guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600">
                UBlood serves as a platform connecting donors with recipients.
                We are not liable for any medical complications that may arise.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
