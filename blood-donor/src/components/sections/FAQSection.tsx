import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Who can donate blood?",
    a: "Most people in good health, aged between 17-65, weighing at least 110 pounds can donate blood. Detailed eligibility criteria will be checked before donation.",
    icon: "❤️",
  },
  {
    q: "How often can I donate blood?",
    a: "You can donate whole blood every 56 days (8 weeks). Platelet donors can give every 7 days up to 24 times per year.",
    icon: "🕒",
  },
  {
    q: "Is blood donation safe?",
    a: "Yes, blood donation is completely safe. New, sterile equipment is used for each donor, and the process is conducted by trained professionals.",
    icon: "🏥",
  },
  {
    q: "How long does it take?",
    a: "The actual blood donation takes about 8-10 minutes. However, the entire process, including registration and health screening, takes about an hour.",
    icon: "⏱️",
  },
  {
    q: "What should I eat before donating?",
    a: "Have a healthy meal and plenty of fluids before donating. Avoid fatty foods and maintain good iron levels in your diet.",
    icon: "🍎",
  },
  {
    q: "How much blood is taken?",
    a: "During a whole blood donation, approximately one pint (about 500 ml) of blood is collected, which is about 10% of your total blood volume.",
    icon: "💉",
  },
] as const;

const FAQSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <FAQGrid />
        <CTASection />
      </div>
    </div>
  );
};

const SectionHeader = () => (
  <motion.div
    className="text-center max-w-3xl mx-auto mb-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.h4
      className="text-red-600 text-sm font-bold tracking-wider mb-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      GET YOUR ANSWERS
    </motion.h4>
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Frequently Asked Questions
    </motion.h2>
    <motion.p
      className="text-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Find answers to common questions about blood donation, eligibility, and
      the donation process
    </motion.p>
  </motion.div>
);

const FAQGrid = () => (
  <motion.div
    className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {faqs.map((faq, index) => (
      <FAQCard key={index} {...faq} index={index} />
    ))}
  </motion.div>
);

interface FAQCardProps {
  q: string;
  a: string;
  icon: string;
  index: number;
}

const FAQCard = ({ q, a, icon, index }: FAQCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
            {q}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const CTASection = () => (
  <motion.div
    className="text-center mt-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <p className="text-gray-600 mb-4">
      Still have questions? We're here to help!
    </p>
    <motion.a
      href="/contact"
      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
    </motion.a>
  </motion.div>
);

export default FAQSection;
