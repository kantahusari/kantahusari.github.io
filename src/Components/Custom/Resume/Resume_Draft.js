import React, { useState } from "react";
import "./Resume.css";
import WorkExperience from "../../Resources/experience.png";
import Education from "../../Resources/education.png";
import Achievements from "../../Resources/achievement.png";
import Calendar from "../../Resources/calendar.png";
import ResumeFile from "../../Resources/KantaHusari_Resume.pdf";

export default function Resume() {
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });

  const [fontFamily, setFontFamily] = useState("Allura");

  const [jobTitleFontFamily, setjobTitleFontFamily] =
    useState("Dancing Script");
  const [listFontFamily, setlistFontFamily] = useState("Playball");

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  return (
    <div className="ResumeContainer">
      {/* Work Experience*/}
      <div className="experienceTitle" style={{ fontFamily: fontFamily }}>
        <img
          src={WorkExperience}
          style={{
            width: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
            height: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
          }}
        />
        <p style={{ marginLeft: "50px" }}>Work Experience</p>
      </div>
      {/* 01 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Full Stack Developer
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Cosmo Music, Richmond Hill, ON
        </p>
        <div className="fromto">
          {/* 
                          
          */}
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              fontFamily: jobTitleFontFamily,
              marginLeft: "20px",
            }}
          >
            November 2021 – Present
          </div>
        </div>
        <ul
          style={{
            fontFamily: listFontFamily,
          }}
        >
          <li>
            Developed and Modified 10+ web applications using PHP, JavaScript,
            HTML, and CSS.
          </li>
          <li>
            Designed and developed 5 new software solutions using React,
            Bootstrap, and Node.JS.
          </li>
          <li>
            Built SQL complex queries, and developed data sync jobs using Shell
            Scripting.
          </li>
          <li>
            Analyzed business process and designed the proper software
            architect.
          </li>
          <li>Investigated and fixed development problems.</li>
          <li>
            Collaborated with marketing team to implement marketing templates.
          </li>
          <li>
            Documented both existing and new solutions using flowcharts and
            version control tool.
          </li>
        </ul>
        <br />
        <br />
      </div>
      {/* 02 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Full Stack Developer
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Freelancer, Toronto, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              fontFamily: jobTitleFontFamily,
              marginLeft: "20px",
            }}
          >
            January 2020 – Present
          </div>
        </div>
        <ul
          style={{
            fontFamily: listFontFamily,
          }}
        >
          <li>Developed custom web applications.</li>

          <li>Assessed project’s requirements.</li>

          <li>
            Designed and implemented UI/UX using Photoshop, HTML, CSS, and
            JavaScript.
          </li>

          <li>Developed both SQL and NoSQL database solutions.</li>

          <li>
            Interacted with clients to make sure that their requirements are
            translated in a proper way.
          </li>
        </ul>
        <br />
        <br />
      </div>
      {/* 03 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Research & Innovation, Students Projects
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          George Brown College, Toronto, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              fontFamily: jobTitleFontFamily,
              marginLeft: "20px",
            }}
          >
            June 2019 - August 2019
          </div>
        </div>
        <ul
          style={{
            fontFamily: listFontFamily,
          }}
        >
          <li>Coordinated four projects of 15K budget each.</li>
          <li>Updated project's SQL database.</li>
          <li>Tracked spending and progress of the projects.</li>
          <li>
            Participated in developing a project proposal estimation rubric.
          </li>
        </ul>
        <br />
        <br />
      </div>
      {/* 04 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Administration and Stores Clerk
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Kobay Enstel Limited, Toronto, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              fontFamily: jobTitleFontFamily,
              marginLeft: "20px",
            }}
          >
            February 2017 – August 2018
          </div>
        </div>
        <ul
          style={{
            fontFamily: listFontFamily,
          }}
        >
          <li>
            Reported to plant manager and performed assistance for controlling
            and HR.
          </li>
          <li>
            Constantly produced excel spreadsheets to track production
            performance using skills such as pivot tables and macros.
          </li>
          <li>Fetched data from data storage using SQL.</li>
          <li>
            Generated daily plant reports for maintenance and production using
            ERP system, SQL, and MS Excel.
          </li>
          <li>
            Performed monthly inventory checking for maintenance department and
            summarized results on spreadsheets.
          </li>
          <li>Reviewed weekly production cost report for controlling.</li>
        </ul>
        <br />
        <br />
      </div>

      {/* Education */}
      <br />
      <div className="experienceTitle" style={{ fontFamily: fontFamily }}>
        <img
          src={Education}
          style={{
            width: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
            height: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
          }}
        />
        <p style={{ marginLeft: "50px" }}>Education</p>
      </div>
      {/* 01 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Advanced Diploma - Computer Programming and Analysis
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          George Brown College, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              marginLeft: "30px",
              fontFamily: jobTitleFontFamily,
            }}
          >
            September 2018 - April 2021
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* 02 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          B.Sc.Business Administration
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Tishreen University, Syria
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              marginLeft: "30px",
              fontFamily: jobTitleFontFamily,
            }}
          >
            September 2009 - April 2013
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* Achievements */}
      <br />
      <div className="experienceTitle" style={{ fontFamily: fontFamily }}>
        <img
          src={Achievements}
          style={{
            width: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
            height: screenSize < 768 ? screenSize * 0.12 : screenSize * 0.07,
          }}
        />
        <p style={{ marginLeft: "50px" }}>Achievements</p>
      </div>
      {/* 01 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Award of Research & Innovation Student Appreciation
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          George Brown College, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              marginLeft: "30px",
              fontFamily: jobTitleFontFamily,
            }}
          >
            2019
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* 02 */}
      <div className="experienceContainer">
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          Dean's List of honor
        </p>
        <p
          style={{
            fontFamily: jobTitleFontFamily,
          }}
        >
          George Brown College, ON
        </p>
        <div className="fromto">
          <img
            src={Calendar}
            style={{
              width: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              height: screenSize < 768 ? screenSize * 0.07 : screenSize * 0.03,
              margin: "0",
              padding: "0",
            }}
          />
          <div
            style={{
              marginLeft: "30px",
              fontFamily: jobTitleFontFamily,
            }}
          >
            2020 - 2021
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className="DownloadResume">
        <a className="DownloadResumeLink" href={ResumeFile} download>
          Download Resume
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}
