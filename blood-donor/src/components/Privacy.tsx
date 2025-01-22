import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Name and contact information</li>
              <li>Blood type and medical history</li>
              <li>Location data for blood donation centers</li>
              <li>Account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Match blood donors with recipients</li>
              <li>Notify you about nearby donation opportunities</li>
              <li>Improve our services and user experience</li>
              <li>Communicate with you about your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your
              personal information. Your data is encrypted and stored securely.
              We regularly review and update our security practices to ensure
              the safety of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our privacy policy or how we
              handle your data, please contact us through our contact page or
              email us at privacy@blooddonor.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
