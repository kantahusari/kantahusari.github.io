import React, { useState, Fragment } from "react";
import "./Aboutme.css";
import Skills from "../Custom/Skills/Skills";
import Resume from "../Custom/Resume/Resume";

export default function Aboutme() {
  const [fontFamily, setFontFamily] = useState("Allura");
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  return (
    <div className="AboutmeContainer" id="Aboutme">
      <br />
      <br />
      <h1 className="Section_Title">
        <span className="Section_Title_Span" style={{ fontSize: screenSize * 0.05 }}>
          About Me
        </span>
      </h1>
      <br />
      <br />
      <br />
      <p className="aboutMeText" style={{ fontSize: screenSize * 0.03, textShadow: "5px 5px 5px black" }}>
        I am a full stack developer with a passion for creating beautiful, intuitive, and responsive web applications. I have a background in business management and a love for learning new technologies.
      </p>
      <br />
      <br />
      <Skills />
      <br />
      <br />
      {/* <Resume /> */}

      {/* <div className="contact_submit">
        <div className="DownloadResumeLink" onClick={() => {window.location.href = "https://www.kantahusari.ca/Resume";}}>Check Resume</div>
      </div> */}
    </div>
  );
}
