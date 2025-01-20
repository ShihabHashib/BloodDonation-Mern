import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Save Lives, Donate Blood</h2>
          <p className="text-xl mb-8">
            Your donation can make a difference in someone's life
          </p>
          <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors">
            Donate Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Why Donate Blood?</h3>
            <p className="text-gray-600">
              Blood donation saves millions of lives every year. Your
              contribution can help accident victims, surgery patients, and
              those fighting serious illnesses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Who Can Donate?</h3>
            <p className="text-gray-600">
              Most healthy adults who are at least 16 years old and weigh at
              least 110 pounds can donate blood every 56 days.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">The Process</h3>
            <p className="text-gray-600">
              The donation process is safe, simple, and takes only about 10-15
              minutes. Every donation can help save up to three lives.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-red-500 mb-2">4.5M</h4>
              <p className="text-gray-600">Annual Blood Donations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-500 mb-2">3</h4>
              <p className="text-gray-600">Lives Saved Per Donation</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-500 mb-2">13.6M</h4>
              <p className="text-gray-600">Lives Impacted Yearly</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-red-500 mb-2">38K</h4>
              <p className="text-gray-600">Daily Blood Donations Needed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Schedule your blood donation appointment today and help save lives
            in your community.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Process Steps Section with Animations */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Donation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6 rounded-lg">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Registration
              </h3>
              <p className="text-gray-600 text-center">
                Sign up and complete a brief health questionnaire
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6 rounded-lg animate-fadeIn delay-100">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-2xl font-bold text-red-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Screening
              </h3>
              <p className="text-gray-600 text-center">
                Quick health check and blood pressure measurement
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6 rounded-lg animate-fadeIn delay-200">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-2xl font-bold text-red-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Donation
              </h3>
              <p className="text-gray-600 text-center">
                Safe and comfortable 10-15 minute procedure
              </p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6 rounded-lg animate-fadeIn delay-300">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-2xl font-bold text-red-500">4</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Recovery
              </h3>
              <p className="text-gray-600 text-center">
                Enjoy refreshments and rest for 15 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Scroll Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Donor Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                    <span className="text-red-500 font-bold">D{index}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">John Doe {index}</h3>
                    <p className="text-gray-500 text-sm">Regular Donor</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Donating blood has become a regular part of my life. It's
                  amazing to know that just a few minutes of my time can help
                  save someone's life."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section with Accordion-style Animation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How often can I donate blood?",
                a: "You can donate whole blood every 56 days.",
              },
              {
                q: "Is blood donation safe?",
                a: "Yes, blood donation is completely safe. New, sterile equipment is used for each donor.",
              },
              {
                q: "How long does it take?",
                a: "The actual donation takes about 10-15 minutes, but the entire process takes about an hour.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button className="w-full px-6 py-4 text-left font-semibold hover:bg-red-50 transition-colors duration-300">
                  {faq.q}
                </button>
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
