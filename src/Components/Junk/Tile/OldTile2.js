import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Tile.css";

import Source from "../../Resources/BlankDevices01.png";

export default function Tile() {
  const elref = useRef();
  // page
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [ScrollPosition, setScrollPosition] = useState(window.innerWidth);
  const [fontFamily, setFontFamily] = useState("Allura");

  // text in the tile
  const [doShow, setdoShow] = useState(false);
  const [textToShowStatus, settextToShowStatus] = useState("none");
  const [textToShowAnimate, settextToShowAnimate] =
    useState("fade_out_show 1s");

  // element stats
  const [windowTop, setwindowTop] = useState(window.pageYOffset);
  const [elementTop, setelementTop] = useState(0);
  const [elementHeight, setelementHeight] = useState(0);
  const [elementBottom, setelementBottom] = useState(0);

  // track kthe changing state of windowTop, elementTop, elementHeight

  useEffect(() => {
    const Scrolly = () => {
      setwindowTop(window.pageYOffset);
      // setelementTop(elref.current.offsetTop);
      // setelementHeight(elref.current.offsetTop + elref.current.clientHeight);
      // setelementHeight(elref.current.clientHeight);
      // setelementBottom(elref.current.offsetBottom);

      // setelementHeight(elref.current.getBoundingClientRect().bottom);
      setelementTop(elref.current.getBoundingClientRect().top);
      setelementBottom(elref.current.getBoundingClientRect().bottom);
    };
    return window.addEventListener("scroll", Scrolly);
  }, []);

  useLayoutEffect(() => {
    const onScroll = () => {
      console.log(`Window: ` + windowTop);
      console.log(`Top: ` + elementTop);
      console.log(`Bottom: ` + elementBottom);
      console.log(`Height: ` + elementHeight);
      // console.log(`Top + Height: ` + (elementTop + elementHeight));
      console.log(`---------------------`);

      if (windowTop >= elementTop && windowTop <= elementBottom) {
        settextToShowStatus("block");
        setTimeout(() => {
          settextToShowAnimate("fade_out_show 1s");
        }, 950);
      } else {
        settextToShowAnimate("fade_in_show 1.5s");
        setTimeout(() => {
          settextToShowStatus("none");
        }, 950);
      }
      // if (window.pageYOffset > 0) {
      // if (windowTop >= elementTop) {
      //   // if (window.pageYOffset <= elref.current.offsetHeight + 250) {
      //   if (windowTop <= elementBottom) {
      //     // console.log(`Show`);
      //     // settextToShowStatus("block");
      //     // settextToShowAnimate("fade_in_show 1s");
      //     setdoShow(true);
      //     settextToShowAnimate("fade_out_show 1s");
      //     settextToShowStatus("block");
      //   } else {
      //     // console.log(`Hide 1`);
      //     // settextToShowStatus("none");
      //     // settextToShowAnimate("fade_out_show 1s");
      //     setdoShow(false);
      //     settextToShowAnimate("fade_in_show 1.5s");
      //     setTimeout(() => {
      //       settextToShowStatus("none");
      //     }, 950);
      //   }
      // } else {
      //   setdoShow(false);
      //   settextToShowAnimate("fade_in_show 1.5s");
      //   setTimeout(() => {
      //     settextToShowStatus("none");
      //   }, 950);
      // }
      // } else {
      //   // console.log(`Hide 2`);
      //   // settextToShowStatus("none");
      //   // settextToShowAnimate("fade_out_show 1s");
      //   setdoShow(false);
      //   settextToShowAnimate("fade_in_show 1.5s");
      //   settextToShowStatus("none");
      // }
    };
    window.addEventListener("scroll", () => {
      // get the integer value of the scroll position
      // console.log(`Window: ` + window.pageYOffset);
      // console.log(`Top: ` + elref.current.offsetTop);
      // console.log(`Height: ` + elref.current.offsetHeight);
      // console.log(
      //   `Top + Height: ` +
      //     (elref.current.offsetTop + elref.current.offsetHeight)
      // );
      // console.log(`---------------------`);
      // var wTop = window.pageYOffset;
      // var elTop = elref.current.offsetTop;
      // var elHeight = elref.current.offsetHeight;
      // setwindowTop(wTop);
      // setelementTop(elTop);
      // setelementHeight(elHeight);
      // showProcess(doShow);
      // if (doShow) {
      //   // console.log(`Hide..`);
      //   settextToShowAnimate("fade_in_show 1.5s");
      //   settextToShowStatus("none");
      // } else {
      //   console.log(`Show..`);
      //   settextToShowAnimate("fade_out_show 1s");
      //   settextToShowStatus("block");
      // }
    });

    // return () => {
    //   window.removeEventListener("scroll", () => {});
    // };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  // function showProcess(value) {
  //   // console.log(`Show Status: ` + value);
  //   if (!value) {
  //     // console.log(`Hide..`);
  //     settextToShowAnimate("fade_in_show 1.5s");
  //     settextToShowStatus("none");
  //   } else {
  //     console.log(`Show..`);
  //     settextToShowAnimate("fade_out_show 1s");
  //     settextToShowStatus("block");
  //   }
  //   // if (value === true) {
  //   //   console.log(`Show..`);
  //   //   settextToShowAnimate("fade_out_show 1s");
  //   //   settextToShowStatus("block");
  //   // }
  // }

  return (
    <div className="Tile_Container">
      <div className="tileOneCont" ref={elref}>
        <div>
          <img
            src={Source}
            className="tileImage"
            style={{
              width: screenSize * 0.4,
            }}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div
          className="tileTextContent"
          style={{ display: textToShowStatus, animation: textToShowAnimate }}
        >
          <div style={{ fontFamily: fontFamily, fontSize: screenSize * 0.05 }}>
            <span>
              <p>
                Hello World
                <br />
                When It Comes to Multiple Devices Responsiveness really matters
                !!!
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
  const Tile_Container = {
    marginTop: "100vh",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  };
  const tileOneCont = {
    height: "900px",
    width: "300px",
    backgroundColor: "red",
    transform: `translateX(${({ animate }) => (animate ? "0" : "-100vw")})`,
    transition: "transform 1s",
    margin: "20px",
    opacity: `${({ animatePercent }) =>
      animatePercent ? `${animatePercent / 100}` : `1`}`,
  };
  
    const [show, doShow] = useState({
      itemOne: false,
      itemTwo: false,
      itemThree: false,
    });
    const [percentShown, setPercentShow] = useState({
      itemOne: 0,
      itemTwo: 0,
      itemThree: 0,
    });
    const ourRef = useRef(null),
      anotherRef = useRef(null),
      refThree = useRef(null);

    useLayoutEffect(() => {
      const topPos = (element) => element.getBoundingClientRect().top;
      const getHeight = (element) => element.offsetHeight;
      const div1Pos = topPos(ourRef.current),
        div2Pos = topPos(anotherRef.current),
        div3Pos = topPos(refThree.current);

      const div3Height = getHeight(refThree.current);

      const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;

        // Element scrolled to
        if (div1Pos < scrollPos) {
          doShow((state) => ({ ...state, itemOne: true }));
        }
        // Element scrolled away (up)
        // if (div1Pos > scrollPos) {
        //   doShow(state => ({ ...state, itemOne: false }));
        // }

        if (div2Pos < scrollPos) {
          doShow((state) => ({ ...state, itemTwo: true }));
        }

        if (div3Pos < scrollPos) {
          // Element scrolled to
          doShow((state) => ({ ...state, itemThree: true }));

          let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height;
          if (itemThreePercent > 100) itemThreePercent = 100;
          if (itemThreePercent < 0) itemThreePercent = 0;

          setPercentShow((prevState) => ({
            ...prevState,
            itemThree: itemThreePercent,
          }));
        } else if (div3Pos > scrollPos) {
          // Element scrolled away (up)
          doShow((state) => ({ ...state, itemThree: false }));
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
      <>
        <p>scroll down</p>
        <div style={Tile_Container}>
          <div
            animate={show.itemThree}
            animatePercent={percentShown.itemThree}
            ref={refThree}
            style={tileOneCont}
          >
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
          </div>
          <div animate={show.itemTwo} ref={anotherRef} style={tileOneCont} />
          <div animate={show.itemOne} ref={ourRef} style={tileOneCont} />
        </div>
      </>
    );
*/
