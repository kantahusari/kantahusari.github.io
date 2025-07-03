import React, { useState, useEffect } from "react";
import "./SectionZero.css";
import Logo from "../Resources/Logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function SectionZero() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  const ImageSize = {
    width: screenSize * 0.15,
    padding: "0",
    margin: "0",
  };

  const ParagraphStyle = {
    textAlign: "center",
    textJustify: "initial",
    fontSize: screenSize * 0.05,
    padding: "0",
    margin: "0",
  };
  const LogoFontStyle = {
    // fontFamily: fontFamily,
    fontSize: screenSize * 0.04,
    padding: "0",
    margin: "0",
    cursor: "pointer",
  };

  function renderNormal() {
    return (
      <div
        className="SectionZero"
        onMouseMove={(event) => {
          // console.log(event.clientX);
          // console.log(event.clientY);
          // if (event.clientX > screenSize * 0.5) {
          //   console.log("right");
          //   // setParagraphStyle({
          //   //   textAlign: "right",
          //   //   textJustify: "initial",
          //   //   fontSize: screenSize * 0.05,
          //   //   padding: "0",
          //   //   margin: "0",
          //   // });
          //   // flip the content to the left
          //   setParagraphStyle({
          //     textAlign: "left",
          //     textJustify: "initial",
          //     fontSize: screenSize * 0.05,
          //     padding: "0",
          //     margin: "0",
          //   });
          // } else {
          //   console.log("left");
          //   setParagraphStyle({
          //     textAlign: "right",
          //     textJustify: "initial",
          //     fontSize: screenSize * 0.05,
          //     padding: "0",
          //     margin: "0",
          //   });
          // }
        }}
      >
        <div className="SectionZero_TopRow">
          <p
            style={LogoFontStyle}
            onClick={() => {
              navigate("/");
            }}
          >
            Kanta Husari
          </p>
        </div>
        <div className="SectionZero_ButtomRow" style={{ flexDirection: screenSize < 800 ? "column" : "row" }}>
          <img
            src={Logo}
            alt="Logo"
            className="Logo"
            style={ImageSize}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
          <p style={ParagraphStyle}>
            Programming
            <br />
            Solutions, and
            <br />
            Development
          </p>
        </div>
      </div>
    );
  }

  function renderMobile() {
    return (
      <div className="SectionZero">
        <div className="SectionZero_TopRow"></div>
        <div className="SectionZero_ButtomRow" style={{ flexDirection: screenSize < 800 ? "column" : "row" }}>
          <p style={ParagraphStyle}>
            Programming
            <br />
            Solutions, and
            <br />
            Development
          </p>
        </div>
      </div>
    );
  }

  return screenSize < 800 ? renderMobile() : renderNormal();
}
