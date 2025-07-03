import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import "../Assets/General.css";
import Logo from "../Resources/Logo.png";
import Burger from "../Resources/Burger.png";
import { HashLink as LinkTo } from "react-router-hash-link";

export default function Header() {
  const navigate = useNavigate();
  const lastScrollPosition = useRef(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  //   const [headerDisplay, setheaderDisplay] = useState("flex");
  const [stickyHeader, setStickyHeader] = useState(false);
  const [ScrollingDown, setScrollingDown] = useState(false);
  const [BurgerClicked, setBurgerClicked] = useState(false);

  function handleScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll <= lastScrollPosition.current || winScroll < 20) {
      setStickyHeader(true);
      // console.log("Scrolling Down");
    } else {
      setStickyHeader(false);
      // console.log("Scrolling Up");
    }

    lastScrollPosition.current = winScroll;
  }
  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  const Navigate_TO = (value) => {
    setBurgerClicked(!BurgerClicked);
    setTimeout(() => {
      const headerHeight = document.getElementById("Header").offsetHeight;
      const height =
        document.getElementById(value).getBoundingClientRect().top +
        window.scrollY - 60;
      window.scrollTo({
        top: Number(height),
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function HeaderNormal() {
    return (
      <div id="Header" className={`Header ${stickyHeader ? "sticky" : ""}`}>
        <div
          className="header_navigation_link"
          onClick={() => {
            Navigate_TO("Aboutme");
          }}
        >
          About Me
        </div>
        <div
          className="header_navigation_link"
          onClick={() => {
            Navigate_TO("Services");
          }}
        >
          Services
        </div>
        {/* <div
          className="header_navigation_link"
          onClick={() => {
            Navigate_TO("Quota");
          }}
        >
          Quota
        </div> */}
        <div
          className="header_navigation_link"
          onClick={() => {
            Navigate_TO("ContactME");
          }}
        >
          Contact Me
        </div>
      </div>
      //   <div id="Header" className={`Header ${stickyHeader ? "sticky" : ""}`}>
      //     <LinkTo className="header_navigation_link" to="#Aboutme" >About Me</LinkTo>
      //     <LinkTo className="header_navigation_link" to="#Services">Services</LinkTo>
      //     <LinkTo className="header_navigation_link" to="#Quota">Quota</LinkTo>
      //     <LinkTo className="header_navigation_link" to="#ContactME">Contact Me</LinkTo>
      //   </div>
    );
  }

  function HeaderMobile() {
    return (
      <div
        id="Header"
        className={`Header_Mobile ${stickyHeader ? "sticky" : ""}`}
        style={{
          paddingLeft: windowSize * 0.05,
          paddingRight: windowSize * 0.05,
        }}
      >
        <div
          className="Header_Mobile_Row"
          style={{
            gap: windowSize <= 800 ? windowSize * 0.1 : windowSize * 0.32,
            paddingLeft: "50px",
            paddingRight: "60px",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "75px" }}
            className="Header_Logo"
            onClick={() => {
              navigate("/");
            }}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
          <p className="Header_Text">Kanta Husari</p>
          <img
            src={Burger}
            alt="Burger"
            style={{ width: "70px" }}
            className="Header_Logo"
            onClick={() => {
              setBurgerClicked(!BurgerClicked);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>
        {BurgerClicked ? (
          <div className="Header_Mobile_Nav" style={{ position: "fixed" }}>
            <div className="Header_Mobile_Nav_Left">
              <p
                className="Header_Nav_Text"
                onClick={() => {
                  Navigate_TO("Aboutme");
                }}
              >
                About Me
              </p>
              <p
                className="Header_Nav_Text"
                onClick={() => {
                  Navigate_TO("Services");
                }}
              >
                Services
              </p>
              {/* <p
                className="Header_Nav_Text"
                onClick={() => {
                  Navigate_TO("Quota");
                }}
              >
                Quota
              </p> */}
              <p
                className="Header_Nav_Text"
                onClick={() => {
                  Navigate_TO("ContactME");
                }}
              >
                Contact Me
              </p>
            </div>
            <div className="Header_Mobile_Nav_Right">
              <p
                className="Header_Nav_Text"
                onClick={() => {
                  setBurgerClicked(!BurgerClicked);
                }}
              >
                X
              </p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  if (windowSize < 800) {
    return <HeaderMobile />;
  } else {
    return <HeaderNormal />;
  }
  //   return HeaderNormal();
  //   return HeaderMobile();
}
