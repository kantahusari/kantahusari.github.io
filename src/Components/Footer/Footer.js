import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Footer.css";
import linkedin from "../Resources/linkedinFinal.png";
import github from "../Resources/githubFinal.png";
import Logo from "../Resources/Logo.png";
import Top from "../Resources/Top.png";
import flag from "../Resources/flag.png";

export default function Footer() {
  const navigate = useNavigate();
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [fontFamily, setFontFamily] = useState("Allura");

  function renderFooter() {
    const LogoStyle = {
      width: screenSize < 700 ? screenSize * 0.1 : screenSize * 0.05,
      cursor: "pointer",
    };
    const FlagStyle = {
      width: screenSize < 700 ? screenSize * 0.1 : screenSize * 0.08,
      marginLeft: "15px",
    };
    const imageSize = {
      width: screenSize < 700 ? screenSize * 0.1 : screenSize * 0.05,
      cursor: "pointer",
      borderRadius: "10%",
    };
    const fontSize = {
      fontSize: screenSize < 700 ? screenSize * 0.05 : screenSize * 0.020,
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
    };
    const Kfont = {
      fontSize: screenSize < 700 ? screenSize * 0.05 : screenSize * 0.020,
      color: "white",
      textDecoration: "none",
    };
    return (
      <div className="Footer_Container">
        <table className="FooterTable">
          <tbody>
            <tr className="FooterTableRow">
              <td className="FooterTableData">
                <div style={Kfont}>Kanta Husari</div>
                <div style={Kfont}>ON, Canada</div>
                {/* <br/>
                <img
                  src={flag}
                  alt="Logo"
                  style={FlagStyle}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                /> */}
              </td>
              <td className="FooterTableData">
                <img
                  src={Logo}
                  alt="Logo"
                  style={LogoStyle}
                  onClick={() => {
                    navigate("/");
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              </td>
            </tr>
            <tr className="FooterTableRow">
              <td className="FooterTableData">
                <a href="tel:+14163194673" style={fontSize}>
                  +1 (416) 319 - 4673
                </a>
              </td>
              <td className="FooterTableData">
                <a
                  href="https://www.linkedin.com/in/kantahusari"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={imageSize}
                    onContextMenu={(e) => {
                      e.preventDefault();
                    }}
                  />
                </a>
              </td>
            </tr>

            <tr className="FooterTableRow">
              <td className="FooterTableData">
                <a href="mailto:kanta.husari@gmail.com" style={fontSize}>
                  kanta.husari@gmail.com
                </a>
              </td>
              <td className="FooterTableData">
                <a href="https://github.com/kantahusari" target="_blank">
                  <img
                    src={github}
                    alt="github"
                    style={imageSize}
                    onContextMenu={(e) => {
                      e.preventDefault();
                    }}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* add go to top button */}

        <div
          className="Footer_Top"
          style={{
            textAlign: "right",
          }}
          onClick={() => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={Top}
            alt="Top"
            style={{
              width: screenSize < 700 ? screenSize * 0.1 : screenSize * 0.050,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    );
  }

  return renderFooter();
}
