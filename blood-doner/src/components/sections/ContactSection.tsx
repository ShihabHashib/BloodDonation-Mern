import React from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const contactCards = [
  {
    title: "Phone Number",
    subtitle: "Call us directly",
    info: "333 555 9090",
    icon: PhoneIcon,
    link: "tel:3335559090",
  },
  {
    title: "Email Address",
    subtitle: "Drop us a line",
    info: "Donate@gmail.com",
    icon: EnvelopeIcon,
    link: "mailto:donate@gmail.com",
  },
  {
    title: "Location",
    subtitle: "Visit our center",
    info: "Dhaka Bangladesh",
    icon: MapPinIcon,
    link: "#",
  },
] as const;

const ContactSection = () => {
  return (
    <div className="relative bg-black text-white py-20">
      {/* Background div with optimized performance */}
      <div
        className="absolute inset-0 bg-[url('/contact.jpg')] bg-cover bg-center"
        style={{
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader />
          <ContactCards />
          <CTAButton />
        </div>
      </div>
    </div>
  );
};

const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h4 className="text-red-600 text-sm font-bold tracking-wider mb-3">
      CONTACT US NOW
    </h4>
    <h2 className="text-4xl font-bold mb-4">Ready to Save Lives?</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Your donation can make a significant impact. Contact us now to schedule
      your donation or learn more about how you can help save lives.
    </p>
  </motion.div>
);

const ContactCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {contactCards.map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <ContactCard {...card} />
      </motion.div>
    ))}
  </div>
);

interface ContactCardProps {
  title: string;
  subtitle: string;
  info: string;
  icon: (typeof contactCards)[number]["icon"];
  link: string;
}

const ContactCard = ({
  title,
  subtitle,
  info,
  icon: Icon,
  link,
}: ContactCardProps) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-red-600 transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-red-600 group-hover:text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
    <a
      href={link}
      className="text-xl font-semibold text-red-600 hover:text-red-500"
    >
      {info}
    </a>
  </div>
);

const CTAButton = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="text-center"
  >
    <a
      href="/donor-registration"
      className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 font-semibold hover:bg-red-700 transition-colors"
    >
      Start Donating Now
    </a>
  </motion.div>
);

export default ContactSection;
