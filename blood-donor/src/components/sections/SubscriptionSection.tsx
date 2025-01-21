import React, { useState, useEffect, useRef } from "react";

interface SubscriptionForm {
  email: string;
  bloodType: string;
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const SubscriptionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<SubscriptionForm>({
    email: "",
    bloodType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save subscription
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ email: "", bloodType: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-gradient-to-b from-white to-gray-50 py-24 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Stay Informed, Save Lives
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Subscribe to receive notifications when your blood type is needed
              in your area. Be ready to make a difference when it matters most.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="px-6 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex-1 max-w-md text-lg shadow-sm transition-all duration-200 hover:shadow-md"
                />

                <select
                  required
                  value={formData.bloodType}
                  onChange={(e) =>
                    setFormData({ ...formData, bloodType: e.target.value })
                  }
                  className="px-6 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full md:w-auto text-lg shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 hover:from-red-700 hover:to-red-800 transition-all duration-300 w-full md:w-auto text-lg font-semibold shadow-lg hover:shadow-xl active:scale-95"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div className="mt-6 text-green-600 bg-green-50 p-4 rounded-xl text-center font-medium">
                Thank you for subscribing! We'll notify you when your blood type
                is needed.
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
