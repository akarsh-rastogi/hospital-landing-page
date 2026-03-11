
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ClinicInfo from "../components/ClinicInfo";
import Doctors from "../components/Doctors";
import ReviewsSection from "../components/ReviewsSection"; 
import Footer from "../components/Footer";
import "../Styles/global.css";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ClinicInfo />
      <Doctors />
      <ReviewsSection />
      <Footer />
    </>
  );
}
