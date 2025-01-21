import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import InfoCardsSection from "./sections/InfoCardsSection";
import StatisticsSection from "./sections/StatisticsSection";
import FAQSection from "./sections/FAQSection";
import BloodRequestSection from "./sections/BloodRequestSection";
import ContactSection from "./sections/ContactSection";
import SubscriptionSection from "./sections/SubscriptionSection";
import ScrollToTop from "./common/ScrollToTop";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled more than 500px
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <InfoCardsSection />
      <StatisticsSection />
      <BloodRequestSection />
      <SubscriptionSection />
      <ContactSection />
      <FAQSection />
      <ScrollToTop show={showScrollTop} />
    </main>
  );
};

export default Home;
