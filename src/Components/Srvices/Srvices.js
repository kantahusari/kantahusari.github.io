import React, { useState, useEffect, useRef } from "react";
import "./Srvices.css";
import "../Assets/General.css";
import uniqid from "uniqid";
import Arrow from "../Resources/Arrow.png";
export default function Srvices() {
  const lastClicked = useRef(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  // "Develop software from scratch or using existing codebase.",
  // "Implement software features and functionality.",
  // "Test software and ensure it is working as expected.",
  const services = {
    0: {
      0: "Business Analysis",
      1: [
        "Conduct a meeting with clients to address Business requirements, flows, and estimate delivery milestones",
        "Identify business entities.",
        "Analyse business domain and relationship between entities.",
        "Identify possible expansions coming as business grows.",
      ],
    },
    1: {
      0: "Software design and Mockups",
      1: [
        "Create snadboxed prototypes.",
        "Customize software architecture to exactly fit clients's needs.",
        "This stage is not limited to prototyping, but also data flow, design, color schemas etc...",
      ],
    },
    2: {
      0: "Software Development",
      1: [
        "Convert business analysis into a software architecture.",
        "Split development process into multiple phases.",
      ],
    },
    3: {
      0: "Release and Deployment",
      1: [
        "Prepare release technical infrastructure.",
        "Setup and configure production environment.",
        "pre release testing and bug-fixing.",
      ],
    },
    4: {
      0: "Maintenance",
      1: ["Frequent required maintenance upon an agreement."],
    },
  };

  const [showBlock, setshowBlock] = useState({ index: 0, show: false });

  function handleDisplay(index, status) {
    if (Number(lastClicked.current) === Number(index)) {
      if (status === true) {
        setshowBlock({ index: index, show: false });
      } else {
        setshowBlock({ index: index, show: true });
      }
    } else if (Number(lastClicked.current) !== Number(index)) {
      setshowBlock({ index: index, show: true });
      lastClicked.current = index;
    }
  }

  // add resize event listener
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setScreenSize(window.innerWidth);
      },
      true
    );
  }, [screenSize]);

  return (
    <div className="Services" id="Services">
      <br />
      <br />
      <h1 className="Section_Title">
        <span
          className="Section_Title_Span"
          style={{ fontSize: screenSize * 0.05 }}
        >
          Services
        </span>
      </h1>
      <br />
      <br />
      <div className="Service_Tile">
        {Object.keys(services).map((key) => {
          const last = Object.keys(services).pop();
          var style = {};

          if (key % 2 === 0) {
            style = {
              borderLeft: "3px solid #005a7c",
              borderBottom: "3px solid #005a7c",
              borderRadius: "0px 0px 0px 25px",
            };
          } else {
            style = {
              borderRight: "3px solid #005a7c",
              borderBottom: "3px solid #005a7c",
              borderRadius: "0px 0px 25px 0px",
            };
          }

          if (key === last && key % 2 === 0) {
            style = {
              borderLeft: "3px solid #005a7c",
            };
          } else if (key === last && key % 2 !== 0) {
            style = {
              borderRight: "3px solid #005a7c",
            };
          }

          return (
            <div className="Service_Frag" key={`${uniqid()}`} style={style}>
              <div className="Service_Tile_Title" style={key % 2 === 0 ? { alignItems: "flex-start" }: { alignItems: "flex-end" }}>
                <div className="Service_Title_Text" onClick={() => {handleDisplay(key, showBlock.show);}} style={{fontSize:screenSize < 700 ? screenSize * 0.04 : screenSize * 0.035,}}>
                  {key % 2 === 0 ? `${Number(key) + 1} - ${services[key][0]}`: `${services[key][0]} - ${Number(key) + 1}`}
                </div>
              </div>
              {showBlock.index === key && showBlock.show ? (
                <div className="Service_Tile_Description" style={{ paddingLeft: screenSize * 0.15 }}>
                  {services[key][1].map((item) => {
                    return (
                      <div className="ServiceDescription" key={`${uniqid()}`}>
                        <img
                          src={Arrow}
                          alt="arrow"
                          className="Arrow"
                          style={{
                            width: "10px",
                            height: "10px",
                            marginRight: "15px",
                          }}
                        />
                        {item}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
