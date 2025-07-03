import React from "react";
import Header from "../Header/Header";
import Footer from "../../Components/Footer/Footer";

import SectionZero from "../SectionZero/SectionZero";
import SectionOne from "../SectionOne/SectionOne";
import AboutMe from "../Aboutme/Aboutme";
import Services from "../Srvices/Srvices"
import ContactME from "../ContactME/ContactME";
import CookieBar from "../CookieBar/CookieBar";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="Home_Container">
        <SectionZero />
        <AboutMe />
        <Services />
        <ContactME />
      </div>
      <Footer />
      <CookieBar />
    </>
  );
}
