import React, { useState, useEffect } from "react";
import "./SectionOne.css";
import "../Assets/General.css"
import SectionBackground from "../Resources/ImagesToUse/imageTwo.png";
import businessanalysis from "../Resources/businessanalysis.jpg";
import Design from "../Resources/Design.png";
import DevOps from "../Resources/DevOps.png";
import Framework from "../Resources/Framework.png";
import Server from "../Resources/Server.png";

export default function SectionOne() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const ParagraphStyle = {fontSize: screenSize * 0.02,};
  const [SectionOne_Flex_Direction, setSectionOne_Flex_Direction] = useState(
    "row"
  );

  const [paragraphWidth, setparagraphWidth] = useState(
    window.innerWidth * 0.25
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      setSectionOne_Flex_Direction("column");
      setparagraphWidth("75%");
    } else {
      setSectionOne_Flex_Direction("row");
      setparagraphWidth("80%");
    }
  });
  const Navigate_TO = (value) => {
    console.log(value);
    setTimeout(() => {
      const height =
        document.getElementById(value).getBoundingClientRect().top +
        window.scrollY -
        60;
      console.log(height);
      window.scrollTo({
        top: Number(height),
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  };

  return (
    <div className="SectionOne" id="SectionOne">
      <h1 className="Section_Title">
        <span className="Section_Title_Span" style={{fontSize:screenSize*0.05}}>What I Do</span>
      </h1>
      <p style={ParagraphStyle} className="SectionOne_Paragraph">
        I automate your business work flow through devloping the right solution
        for the problem.
      </p>

      <p style={ParagraphStyle} className="SectionOne_Paragraph">
        If you have an idea and still stuck at the now what moment,{" "}
        <br/>
        <span
          className="SectionOne_Span"
          onClick={() => {
            Navigate_TO("ContactME");
          }}
        >
          drop me a line !!
        </span>{" "}
        Let's bring your idea to live.
      </p>
      <div
        className="SectionOne_Tiles_Block"
        style={{ flexDirection: SectionOne_Flex_Direction }}
      >
        <div
          className="SectionOne_Tile"
          style={{
            backgroundImage: `url(${businessanalysis})`,
          }}
        >
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div>

        <div className="SectionOne_Tile">
          <img
            src={Design}
            alt="SectionBackground"
            className="SectionOne_Tile_Image"
          />
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div>

        <div className="SectionOne_Tile">
          <img
            src={DevOps}
            alt="SectionBackground"
            className="SectionOne_Tile_Image"
          />
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div>
      </div>

      <div
        className="SectionOne_Tiles_Block"
        style={{ flexDirection: SectionOne_Flex_Direction }}
      >
        <div className="SectionOne_Tile">
          <img
            src={Framework}
            alt="SectionBackground"
            className="SectionOne_Tile_Image"
          />
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div>

        <div className="SectionOne_Tile">
          <img
            src={Server}
            alt="SectionBackground"
            className="SectionOne_Tile_Image"
          />
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div>

        {/* <div className="SectionOne_Tile">
          <img
            src={DevOps}
            alt="SectionBackground"
            className="SectionOne_Tile_Image"
          />
          <label className="SectionOne_Tile_Label">Software Development</label>
          <p
            className="SectionOne_Tile_Paragraph"
            style={{
              width: paragraphWidth,
            }}
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi,
            euismod egestas nisl nunc euismod nisi. Donec euismod, nisl eget
            consectetur sagittis, nisl nunc euismod nisi, euismod egestas nisl
            nunc euismod nisi.
          </p>
        </div> */}
      </div>
    </div>
  );
}
