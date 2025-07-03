import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Tile.css";

import Source from "../../Resources/BlankDevices01.png";

// Hook

export default function Tile() {
  const elref = useRef(null);
  // page
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [ScrollPosition, setScrollPosition] = useState(window.innerWidth);
  const [fontFamily, setFontFamily] = useState("Allura");

  function useOnScreen(ref, rootMargin = "50px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            setIntersecting(entry.isIntersecting);
          });
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.disconnect();
      };
    }, []);
    // isIntersecting ? console.log("true") : console.log("false");
    return isIntersecting;
  }

  const onScreen = useOnScreen(elref, "-400px");

  
  function showNone() {
    setTimeout(() => {
      return "none";
    }, 1500);
  }

  
  function renderNormal() {
    return (
      <div className="Tile_Container">
        <div className="tileOneCont" ref={elref}>
          <div
            className="tileImagecontainer"
            style={
              onScreen
                ? {
                    animationName: "to_the_left",
                    animationDuration: "1s",
                    animationTimingFunction: "ease-in-out",
                  }
                : {
                    animationName: "to_the_right",
                    animationDuration: "1s",
                    animationTimingFunction: "ease-in-out",
                  }
            }
          >
            <img
              className="tileImage"
              src={Source}
              style={{
                width: screenSize * 0.3,
              }}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <div
            className="tileTextContent"
            style={{
              display: onScreen ? "block" : "none",
              animation: onScreen ? "fade_out_show 1s" : "fade_in_show 1s",
            }}
          >
            <div
              style={{ fontFamily: fontFamily, fontSize: screenSize * 0.03 }}
            >
              <span>
                <p>
                  Hello World
                  <br />
                  When It Comes to Multiple Devices
                  <br />
                  Responsiveness really matters !!!
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderMobile() {
    return (
      <div className="Tile_Container">
        <div className="tileOneCont" ref={elref}>
          <div
            className="tileImagecontainer"
            style={{ marginLeft: `${screenSize * 0.03}%` }}
          >
            <img
              className="tileImage"
              src={Source}
              style={{
                width: screenSize * 0.3,
              }}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <div className="tileTextContent">
            <div
              style={{ fontFamily: fontFamily, fontSize: screenSize * 0.03 }}
            >
              <span>
                <p>
                  Hello World
                  <br />
                  When It Comes to Multiple Devices
                  <br />
                  Responsiveness really matters !!!
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screenSize < 800) {
    return renderMobile();
  } else {
    return renderNormal();
  }
}
