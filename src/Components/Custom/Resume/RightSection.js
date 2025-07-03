import React from "react";
import "./Resume.css";
import Arrow from "../../Resources/Arrow.png";
import uniqid from "uniqid";
export default function RightSection(props) {
  const data = Array.from(props.text);
  return (
    <div className="Resume_Container_Down">
      <div>
        <span className="JobTitle">{props.title}</span>
        <br />
        <span className="JobPlace">{props.place}</span>
        <br />
        <span className="JobDate">{props.date}</span>
        <br />
        <br />

        {data.map((item, index) => {
          return (
            <div className="JobDescription" key={index}>
              <img
                src={Arrow}
                alt="arrow"
                className="Arrow"
                style={{ width: "10px", height: "10px", marginRight: "15px" }}
              />
              <p key={uniqid()}>{item}</p>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
