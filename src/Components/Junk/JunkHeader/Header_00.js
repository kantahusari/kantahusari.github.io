import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import "../Assets/General.css";
import Logo from "../Resources/Logo.png";
import Burger from "../Resources/Burger.png";
import { HashLink as LinkTo } from "react-router-hash-link";
export default function Header() {
  const navigate = useNavigate();
  window.addEventListener("scroll", () => {setScrollPosition(window.scrollY);});
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setOnScrollBarName("Header_Container_On_Scroll_Sensitive");
    } else {
      setOnScrollBarName("Header_Container_On_Scroll");
    }
  });
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const [fontFamily, setFontFamily] = useState("Allura");
  const [BurgerClicked, setBurgerClicked] = useState(false);
  const [Header_Navigation_Class_Name,setHeader_Navigation_Class_Name,] = useState("Header_Navigation_On_Zipped");
  const [OnScrollBarName, setOnScrollBarName] = useState("Header_Container_On_Scroll");
  function renderNormalHeader() {
    const ImageSize = {
      width: screenSize * 0.15,
      padding: "0",
      margin: "0",
    };
    const LogoFontStyle = {
      fontFamily: fontFamily,
      fontSize: screenSize * 0.04,
      padding: "0",
      margin: "0",
      cursor: "pointer",
    };
    const ParagraphStyle = {
      textAlign: "center",
      textJustify: "initial",
      fontFamily: fontFamily,
      fontSize: screenSize * 0.05,
      padding: "0",
      margin: "0",
    };
    const navigation_font = {
      fontFamily: fontFamily,
      fontSize: screenSize * 0.03,
      padding: "15px",
      cursor: "pointer",
      textDecoration: "none",
    };
    return (
      <div className="Header_Container">
        <div className="Logo_Section">
          <div className="Logo_Section_Row">
            <p
              style={LogoFontStyle}
              onClick={() => {
                navigate("/");
              }}
            >
              Kanta Husari
            </p>
          </div>
          <div className="Logo_Section_Row">
            <img
              src={Logo}
              alt="logo"
              className="Header_Logo"
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
        <div className="header_normal_navigation">
          <LinkTo
            to="#Aboutme"
            className="header_navigation_link"
            style={navigation_font}
          >
            About Me
          </LinkTo>
          <LinkTo
            to="#Services"
            className="header_navigation_link"
            style={navigation_font}
          >
            Services
          </LinkTo>
          <LinkTo
            to="#Quota"
            className="header_navigation_link"
            style={navigation_font}
          >
            Get a Quote
          </LinkTo>
          <LinkTo
            to="#ContactME"
            className="header_navigation_link"
            style={navigation_font}
          >
            Contact Me
          </LinkTo>
        </div>
      </div>
    );
  }

  function renderOnScrollHeader() {
    const ImageSize = {
      width: screenSize * 0.06,
      padding: "0",
      margin: "0",
      cursor: "pointer",
    };
    const navigation_font = {
      fontFamily: fontFamily,
      fontSize: screenSize * 0.036,
      cursor: "pointer",
    };
    return (
      <div className={OnScrollBarName}>
        <div>
          <img
            src={Logo}
            alt="logo"
            className="Header_Logo"
            style={ImageSize}
            onClick={() => {
              navigate("/");
            }}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>
        <LinkTo
          to="#Aboutme"
          className="header_navigation_link"
          style={navigation_font}
        >
          About Me
        </LinkTo>

        <LinkTo
          to="#Services"
          className="header_navigation_link"
          style={navigation_font}
        >
          Services
        </LinkTo>

        <LinkTo
          to="#Quota"
          className="header_navigation_link"
          style={navigation_font}
        >
          Get a Quote
        </LinkTo>

        <LinkTo
          to="#ContactME"
          className="header_navigation_link"
          style={navigation_font}
        >
          Contact Me
        </LinkTo>
      </div>
    );
  }

  function renderZippedHeader() {
    const ImageSize = {
      width: screenSize * 0.06,
      paddingLeft: screenSize * 0.05,
      paddingRight: screenSize * 0.05,
      margin: "0",
      cursor: "pointer",
    };
    const LogoFontStyle = {
      fontFamily: fontFamily,
      fontSize: screenSize * 0.04,
      padding: "0",
      margin: "0",
      cursor: "pointer",
    };
    const navigation_font = {
      fontFamily: fontFamily,
      fontSize: screenSize * 0.036,
      cursor: "pointer",
      width: "fit-content",
      marginTop: screenSize * 0.002,
    };
    return (
      <>
        <div
          className="Header_Container_On_Zipped"
          style={{
            boxShadow: BurgerClicked
              ? "none"
              : "0px 20px 50px 15px rgb(0, 0, 0)",
          }}
        >
          <div>
            <img
              src={Logo}
              alt="logo"
              className="Header_Logo"
              style={ImageSize}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
          </div>
          <div>
            <p
              style={LogoFontStyle}
              onClick={() => {
                navigate("/");
              }}
            >
              Kanta Husari
            </p>
          </div>
          <div>
            <img
              src={Burger}
              alt="logo"
              className="Header_Logo"
              style={ImageSize}
              onClick={() => {
                setBurgerClicked(!BurgerClicked);
                if (BurgerClicked) {
                  setHeader_Navigation_Class_Name(
                    "Header_Navigation_On_Zipped"
                  );
                } else {
                  setHeader_Navigation_Class_Name(
                    "Header_Navigation_On_Zipped_Closed"
                  );
                }
              }}
            />
          </div>
        </div>
        <div
          className={Header_Navigation_Class_Name}
          style={BurgerClicked ? { display: "block" } : { display: "none" }}
        >
          <LinkTo
            to="#Aboutme"
            className="header_navigation_link"
            style={navigation_font}
          >
            About Me
          </LinkTo>
          <br />
          <LinkTo
            to="#Services"
            className="header_navigation_link"
            style={navigation_font}
          >
            Services
          </LinkTo>
          <br />
          <LinkTo
            to="#Quota"
            className="header_navigation_link"
            style={navigation_font}
          >
            Get a Quote
          </LinkTo>
          <br />
          <LinkTo
            to="#Quota"
            className="header_navigation_link"
            style={navigation_font}
          >
            Contact Me
          </LinkTo>
        </div>
      </>
    );
  }

  if (screenSize < 768) {
    return renderZippedHeader();
  } else if (screenSize < 1024) {
    return renderOnScrollHeader();
  } else {
    if (scrollPosition > 0) {
      return renderOnScrollHeader();
    } else {
      return renderNormalHeader();
    }
  }
}
