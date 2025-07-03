import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Tile.css";

import Source from "../../Resources/BlankDevices01.png";

export default function Tile() {
  // hiddenRef.current.getBoundingClientRect().bottom
  // window.pageYOffset
  // hiddenRef.current.offsetTop
  const hiddenRef = useRef();

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [ScrollPosition, setScrollPosition] = useState(window.innerWidth);
  const [fontFamily, setFontFamily] = useState("Allura");
  const [isClicked, setisClicked] = useState(false);

  const [Display, setDisplay] = useState("none");
  const [animation, setanimation] = useState("fade_out_show 1s");
  // const [animation, setanimation] = useState(null);

  const [showTile, setshowTile] = useState(false);
  const [TargetElementDimTop, setTargetElementDimTop] = useState(0);
  const [TargetElementDimHeight, setTargetElementDimHeight] = useState(0);

  function showBox() {
    setanimation("fade_in_show 1s");
    setTimeout(() => {
      setDisplay("none");
    }, 950);
  }
  function hideBox() {
    setDisplay("block");
    setanimation("fade_out_show 1s");
  }

  useLayoutEffect(() => {
    // console.log(hiddenRef.current.getBoundingClientRect().bottom);
    // console.log(`Window: ` + window.pageYOffset);
    // console.log(`Current Top: ` + hiddenRef.current.offsetTop);
    // console.log(`Bounding Top: ` + hiddenRef.current.getBoundingClientRect().top);
    // console.log(`Current Height: ` + hiddenRef.current.offsetHeight); //use this as there is no change to the height of the element
    // console.log(`Bounding Height: ` + hiddenRef.current.getBoundingClientRect().height);
    // console.log(`Bounding Buttom: ` + hiddenRef.current.getBoundingClientRect().bottom);
    // console.log(`Difference: ` + hiddenRef.current.offsetTop);
    // console.log(`---------------------------------`);

    setTargetElementDimTop(hiddenRef.current.offsetTop);
    setTargetElementDimHeight(hiddenRef.current.offsetHeight);

    // console.log(`Target Element Top: ` + TargetElementDimTop);
    // console.log(`Target Element Height: ` + TargetElementDimHeight);
    // console.log(`---------------------------------`);

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [window.pageYOffset]);

  const scrollHandler = () => {
    var pageTop = window.pageYOffset;
    // setTargetElementDimTop(hiddenRef.current.offsetTop);
    // setTargetElementDimHeight(hiddenRef.current.offsetHeight);
    // var elementTop = hiddenRef.current.getBoundingClientRect().top;
    // var pageOffset = window.pageYOffset;
    // var clientHeight = window.innerHeight;
    // var scrollHeight = document.body.scrollHeight;
    // var hiddenHeight = hiddenRef.current.offsetHeight;
    // // if (pageOffset + clientHeight > hiddenHeight) {
    // // if (ref1 <= 0) {
    // //   showBox();
    // //   console.log("show");
    // // } else {
    // //   hideBox();
    // //   console.log("hide");
    // // }

    console.log(`Page Top: ` + pageTop);
    console.log(`Target Element Top: ` + hiddenRef.current.offsetTop);
    console.log(`Target Element Height: ` + hiddenRef.current.offsetHeight);
    // console.log(`Target Element Top: ` + TargetElementDimTop);
    // console.log(`Target Element Height: ` + TargetElementDimHeight);
    console.log(`---------------------------------`);
    // if (pageTop === TargetElementDimTop || pageTop < TargetElementDimHeight) {
    //   // console.log("In Range");
    //   showBox();
    // } else {
    //   // console.log("Left");
    //   hideBox();
    // }
  };

  return (
    <div className="Tile_Container">
      <div className="tileOneCont" ref={hiddenRef}>
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
          style={{ display: Display, animation: animation }}
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

    // <div>
    //   <div style={{ height: `100vh` }}>Start</div>
    //   <div ref={hiddenRef}>End</div>
    // </div>
  );
}

/*
  //   remount the component when isClicked changes
  //   useEffect(() => {
  //     if (isClicked) {
  //       setDisplay("block");
  //       setTimeout(() => {
  //         // setanimation("fade_out_show 1s");
  //         setanimation("fade_in_show 950s");
  //       }, 1000);
  //     } else {
  //       setanimation("fade_in_show 1s");
  //       setTimeout(() => {
  //         setDisplay("none");
  //       }, 950);
  //     }
  //   }, [isClicked]);
*/
/*
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: class, class: class, length: 1}
autocapitalize: ""
autofocus: false
baseURI: "http://localhost:3000/#/Home"
childElementCount: 2
childNodes: NodeList(2) [div, div.tileTextContent]
children: HTMLCollection(2) [div, div.tileTextContent]
classList: DOMTokenList ['tileOneCont', value: 'tileOneCont']
className: "tileOneCont"
clientHeight: 504
clientLeft: 0
clientTop: 0
clientWidth: 828
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: div
firstElementChild: div
hidden: false
id: ""
innerHTML: "<div><img src=\"/static/media/BlankDevices01.6f560f8fa4b14d46bafe.png\" class=\"tileImage\" style=\"width: 768px;\"></div><div class=\"tileTextContent\" style=\"display: none;\"><div style=\"font-family: Allura; font-size: 96px;\"><span><p>Hello World<br>When It Comes to Multiple Devices Responsiveness really matters !!!</p></span></div></div>"
innerText: ""
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: div.tileTextContent
lastElementChild: div.tileTextContent
localName: "div"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: null
nextSibling: null
nodeName: "DIV"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 504
offsetLeft: 538
offsetParent: div.Home_Container
offsetTop: 505
offsetWidth: 828
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextlost: null
oncontextmenu: null
oncontextrestored: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onsecuritypolicyviolation: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onslotchange: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<div class=\"tileOneCont\"><div><img src=\"/static/media/BlankDevices01.6f560f8fa4b14d46bafe.png\" class=\"tileImage\" style=\"width: 768px;\"></div><div class=\"tileTextContent\" style=\"display: none;\"><div style=\"font-family: Allura; font-size: 96px;\"><span><p>Hello World<br>When It Comes to Multiple Devices Responsiveness really matters !!!</p></span></div></div></div>"
outerText: ""
ownerDocument: document
parentElement: div.Tile_Container
parentNode: div.Tile_Container
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: null
previousSibling: null
scrollHeight: 504
scrollLeft: 0
scrollTop: 0
scrollWidth: 828
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "DIV"
textContent: "Hello WorldWhen It Comes to Multiple Devices Responsiveness really matters !!!"
title: ""
translate: true
virtualKeyboardPolicy: ""


*/
