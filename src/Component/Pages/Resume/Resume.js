/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./Resume.css";
import InfoBar from "../../InfoBar/InfoBar";
import TopNav from "../../TopNav/TopNav";
import FooterBar from "../../FooterBar/FooterBar";

import Experience from "../../Resources/experience.png";
import Education from "../../Resources/education.png";
import Calendar from "../../Resources/calendar.png";
import Achievement from "../../Resources/achievement.png";
import ResumePDF from "../../Resources/KantaHusari_Resume.pdf";

export default function Resume() {
  const [imagesSize, setimagesSize] = useState(window.innerWidth * (5 / 100));
  const [fontSize, setfontSize] = useState(window.innerWidth * (3 / 100));
  const [iconsize, seticonsize] = useState(window.innerWidth * (2 / 100));

  const [experiencefontsize, setexperiencefontsize] = useState(
    window.innerWidth * (2 / 100)
  );
  const [fromtofontsize, setfromtofontsize] = useState(
    window.innerWidth * (1 / 100)
  );

  const [topexperiencemargin, settopexperiencemargin] = useState(
    window.innerWidth * (7 / 100)
  );
  const [otherexperiencemargintop, setotherexperiencemargintop] = useState(
    window.innerWidth * (2 / 100)
  );

  function changeImageSize() {
    setimagesSize(window.innerWidth * (5 / 100));
    setfontSize(window.innerWidth * (3 / 100));

    if (window.innerWidth < 960) {
      setexperiencefontsize(window.innerWidth * (4 / 100));
      seticonsize(window.innerWidth * (4 / 100));
      setfromtofontsize(window.innerWidth * (3 / 100));

      settopexperiencemargin(window.innerWidth * (7 / 100));
      setotherexperiencemargintop(window.innerWidth * (2 / 100));
    } else {
      setfromtofontsize(window.innerWidth * (1.5 / 100));
      setexperiencefontsize(window.innerWidth * (2 / 100));
      seticonsize(window.innerWidth * (2 / 100));

      settopexperiencemargin(window.innerWidth * (7 / 100));
      setotherexperiencemargintop(window.innerWidth * (2 / 100));
    }
  }

  useEffect(() => {
    changeImageSize();
    return () => {
      setimagesSize({});
      setfontSize({});
      setexperiencefontsize({});
      seticonsize({});
      setfromtofontsize({});
      settopexperiencemargin({});
      setotherexperiencemargintop({});
    };
  }, []);
  window.addEventListener("resize", changeImageSize);

  return (
    <div className="resumecont">
      <InfoBar />
      <TopNav />
      <div className="resumeall">
        <div className="otherinfo">
          {/* Experience */}
          <div className="experience">
            <div
              className="eximagediv"
              style={{ width: imagesSize, height: imagesSize }}
            >
              <img
                className="eximage"
                src={Experience}
                style={{ width: imagesSize, height: imagesSize }}
              ></img>
            </div>
            {/* -------------------- */}

            <div
              className="extitle"
              style={{
                fontSize: fontSize,
                fontWeight: "bold",
                color: "#24344d",
              }}
            >
              WORK EXPERIENCE
            </div>
            {/* -------------------- */}
            <div
              className="experiencecontent"
              style={{ marginTop: topexperiencemargin }}
            >
              <ul>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Full Stack Developer
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Cosmo Music, Richmond Hill, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  November 2021 – Present
                </dt>
              </ul>
              <br />
              <br />
              <ul>
                <li style={{ fontSize: fromtofontsize }}>
                  Developed and Modified 10+ web applications using PHP,
                  JavaScript, HTML, and CSS.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Designed and developed 5 new software solutions using React,
                  Bootstrap, and Node.JS.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Built SQL complex queries, and developed data sync jobs using
                  Shell Scripting.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Analyzed business process and designed the proper software
                  architect.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Investigated and fixed development problems.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Collaborated with marketing team to implement marketing
                  templates.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Documented both existing and new solutions using flowcharts
                  and version control tool.
                </li>
              </ul>
            </div>
            <br />
            {/* 02 */}
            <div
              className="experiencecontent"
              style={{ marginTop: topexperiencemargin }}
            >
              <ul>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Full Stack Developer
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Freelancer, Toronto, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  January 2020 – Present
                </dt>
              </ul>
              <br />
              <br />
              <ul>
                <li style={{ fontSize: fromtofontsize }}>
                  Developed custom web applications.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Assessed project’s requirements.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Designed and implemented UI/UX using Photoshop, HTML, CSS, and
                  JavaScript.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Developed both SQL and NoSQL database solutions.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Interacted with clients to make sure that their requirements
                  are translated in a proper way.
                </li>
              </ul>
            </div>
            <br />
            {/* 03 */}
            <div
              className="experiencecontent"
              style={{ marginTop: otherexperiencemargintop }}
            >
              <ul>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Research & Innovation, Students Projects
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  George Brown College, Toronto, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  June 2019 - August 2019
                </dt>
              </ul>
              <br />
              <br />
              <ul>
                <li style={{ fontSize: fromtofontsize }}>
                  Coordinated four projects of 15K budget each.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Updated project's SQL database.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Tracked spending and progress of the projects.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Participated in developing a project proposal estimation
                  rubric.
                </li>
              </ul>
            </div>
            <br />
            {/* 04 */}
            <div
              className="experiencecontent"
              style={{ marginTop: otherexperiencemargintop }}
            >
              <ul>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Administration and Stores Clerk
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Kobay Enstel Limited, Toronto, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  February 2017 – August 2018
                </dt>
              </ul>
              <br />
              <br />
              <ul>
                <li style={{ fontSize: fromtofontsize }}>
                  Reported to plant manager and performed assistance for
                  controlling and HR.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Constantly produced excel spreadsheets to track production
                  performance using skills such as pivot tables and macros.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Fetched data from data storage using SQL.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Generated daily plant reports for maintenance and production
                  using ERP system, SQL, and MS Excel.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Performed monthly inventory checking for maintenance
                  department and summarized results on spreadsheets.
                </li>
                <li style={{ fontSize: fromtofontsize }}>
                  Reviewed weekly production cost report for controlling.
                </li>
              </ul>
            </div>

            {/* -------------------- */}
          </div>
          {/* Experience Ends */}

          <br />
          <br />
          <br />
          {/* Education */}
          <div className="experience">
            <div
              className="eximagediv"
              style={{ width: imagesSize, height: imagesSize }}
            >
              <img
                className="eximage"
                src={Education}
                style={{ width: imagesSize, height: imagesSize }}
              ></img>
            </div>
            <div
              className="extitle"
              style={{
                fontSize: fontSize,
                fontWeight: "bold",
                color: "#24344d",
              }}
            >
              EDUCATION
            </div>
            <div
              className="experiencecontent"
              style={{ marginTop: topexperiencemargin }}
            >
              <ul>
                <li style={{ fontSize: experiencefontsize, color: "#364e74" }}>
                  Advanced Diploma - Computer Programming and Analysis
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  George Brown College, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  September 2018 - April 2021
                </dt>
              </ul>
              <br />
            </div>
            <div
              className="experiencecontent"
              style={{ marginTop: otherexperiencemargintop }}
            >
              <ul>
                <li style={{ fontSize: experiencefontsize, color: "#364e74" }}>
                  B.Sc.Business Administration
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  Tishreen University, Syria
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  2013
                </dt>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Achievements */}
          <div className="experience">
            <div
              className="eximagediv"
              style={{ width: imagesSize, height: imagesSize }}
            >
              <img
                className="eximage"
                src={Achievement}
                style={{ width: imagesSize, height: imagesSize }}
              ></img>
            </div>
            <div
              className="extitle"
              style={{
                fontSize: fontSize,
                fontWeight: "bold",
                color: "#24344d",
              }}
            >
              ACHIEVEMENTS
            </div>
            <div
              className="experiencecontent"
              style={{ marginTop: topexperiencemargin }}
            >
              <ul>
                <li style={{ fontSize: experiencefontsize, color: "#364e74" }}>
                  Award of Research & Innovation Student Appreciation
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  George Brown College, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  2019
                </dt>
              </ul>
              <br />
            </div>
            <div
              className="experiencecontent"
              style={{ marginTop: otherexperiencemargintop }}
            >
              <ul>
                <li style={{ fontSize: experiencefontsize, color: "#364e74" }}>
                  Dean's List of honor
                </li>
                <li
                  style={{
                    fontSize: experiencefontsize,
                    fontStyle: "italic",
                    listStyleType: "none",
                    color: "#364e74",
                  }}
                >
                  George Brown College, ON
                </li>
                <br />
                <dt
                  style={{ width: iconsize, height: iconsize }}
                  className="date"
                >
                  <img
                    src={Calendar}
                    style={{ width: iconsize, height: iconsize }}
                  ></img>
                </dt>
                <dt
                  className="fromto"
                  style={{
                    fontSize: fromtofontsize,
                    fontStyle: "italic",
                    color: "#364e74",
                  }}
                >
                  2020 - 2021
                </dt>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="DownloadResume">
            <a className="DownloadResumeLink" href={ResumePDF} download>
              Download Resume
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
