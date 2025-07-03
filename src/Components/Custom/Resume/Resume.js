import React, { useState, useEffect } from "react";
import "./Resume.css";
import RightSection from "./RightSection";
import RightSectionZero from "./RightSectionZero";
import EPC from "../../../EPC/EPC";
import axios from "axios";
import uniqid from "uniqid";
export default function Resume() {
  // console.log(EPC.Resume);
  const [resumeData, setresumeData] = useState([]);
  const active_horizontal = {};
  const in_active_horizontal = {};

  const active_vertical = {};
  const in_active_vertical = {};

  const [JobChoosen, setJobChoosen] = useState(0);
  const [Title, setTitle] = useState("");
  const [Place, setPlace] = useState("");
  const [jobDate, setDate] = useState("");
  const [JobText, setJobText] = useState("");

  const [SelectedSection, setSelectedSection] = useState(0);

  const [windowSize, setwindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setwindowSize(window.innerWidth);
  });
  function handleJobChange(whichView, index) {
    setJobChoosen(index);
    setTitle(resumeData[index][0]);
    setPlace(resumeData[index][1]);
    setDate(resumeData[index][2]);
    setJobText(resumeData[index][3]);
    setSelectedSection(index);
    if (whichView === "H") {
    } else if (whichView === "V") {
    }
  }

  function renderJobs() {
    if (windowSize >= 1550) {
      return (
        <div className="Resume_Container_Horizontal">
          <div className="Resume_Container_Left">
            {resumeData.map((item, index) => {
              return (
                <p
                  key={uniqid()}
                  className="Resume_P"
                  style={
                    SelectedSection === index
                      ? {
                          borderLeft: "5px solid #005a7c",
                          paddingLeft: "10px",
                          color: "#005a7c",
                          fontSize: "1.5rem",
                        }
                      : {}
                  }
                  onClick={() => {
                    handleJobChange("H", index);
                  }}
                >
                  {item[0]}
                </p>
              );
            })}
          </div>
          <RightSectionZero title={Title} place={Place} date={jobDate} text={JobText} />
        </div>
      );
    } else {
      return (
        <div className="Resume_Container_Vertical" style={{ width: windowSize - 100 }}>
          <div className="Resume_Container_Top">
            {resumeData.map((item, index) => {
              return (
                <div
                  key={uniqid()}
                  className="Resume_P"
                  onClick={() => {
                    handleJobChange("V", index);
                  }}
                  style={
                    SelectedSection === index
                      ? {
                          borderBottom: "5px solid #005a7c",
                          paddingBottom: "10px",
                          color: "#005a7c",
                          fontSize: "1.5rem",
                        }
                      : {}
                  }
                >
                  {item[0]}
                </div>
              );
            })}
          </div>
          <RightSection title={Title} place={Place} date={jobDate} text={JobText} />
        </div>
      );
    }
  }
  useEffect(() => {
    renderJobs();
  }, [windowSize]);

  useEffect(() => {
    axios.get(EPC.Resume).then((res) => {
      setresumeData(res.data);
      setTitle(res.data[0][0]);
      setPlace(res.data[0][1]);
      setDate(res.data[0][2]);
      setJobText(res.data[0][3]);
    });
  }, []);

  return (
    <div className="Resume">
      <h1 className="Section_Title">
        <span className="Section_Title_Span" style={{ fontSize: windowSize * 0.05 }}>
          Where I've Worked
        </span>
      </h1>
      <br />
      <br />
      {renderJobs()}
      <br />
      <br />
    </div>
  );
}
