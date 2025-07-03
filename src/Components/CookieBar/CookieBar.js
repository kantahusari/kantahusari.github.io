import React, { useState, useEffect } from "react";
import "./CookieBar.css";
import Cookies from "universal-cookie";
import axios from "axios";
import EPC from "../../EPC/EPC";

export default function CookieBar() {
  const cookie = new Cookies();
  const all = cookie.getAll();
  const [pagereloader, setpagereloader] = useState(false);

  const [visitor, setvisitor] = useState("");
  const [changeStatus, setchangeStatus] = useState(false);
  const [showPolicy, setshowPolicy] = useState(false);
  async function setAllow() {
    const res = await axios
      .get("https://geolocation-db.com/json/")
      .then((res) => {
        const visitorInfo = {
          ip: res.data.IPv4,
          country: res.data.country_name,
          latitude: res.data.latitude,
          longitude: res.data.longitude,
        };
        setvisitor(visitorInfo);

        axios
          .post(EPC.IP, visitorInfo)
          .then((res) => {
            if (res.data.errors === null || res.data.errors === undefined) {
              const cookieToset = {
                country: res.data.country,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
              };
              cookie.set("visitor", cookieToset);
            } else {
              cookie.set("visitor", 0);
            }
          })
          .catch((err) => {
            cookie.set("visitor", 0);
          });
      });
  }

  async function setBlock() {
    await cookie.set("visitor", 0);
  }

  async function allow() {
    await setAllow();
    setchangeStatus(!changeStatus);
  }

  async function block() {
    await setBlock();
    setchangeStatus(!changeStatus);
  }
  function Show() {
    return (
      <div className="CookieBar">
        <p>
          This website uses cookies,{" "}
          <span className="ReadMore" onClick={() => setshowPolicy(!showPolicy)}>
            Check Policy
          </span>
        </p>
        <div className="AllowButton" onClick={allow}>
          Allow
        </div>
        <div className="AllowButton" onClick={block}>
          Reject
        </div>
        {showPolicy ? (
          <div className="Policy">
            <div className="Policy_Title">
              <p>Cookie Policy</p>
              <p className="close" onClick={() => setshowPolicy(!showPolicy)}>
                &times;
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p>Straight Forward !!!</p>
            <p>This website does not share information with anyone ...</p>
            <p>
              And do not use information for any purpose, except for the
              functionality of this website
            </p>
            <p>
              Rejecting cookies will not impact your experience using this
              website
            </p>
          </div>
        ) : null}
      </div>
    );
  }
  function Hide() {
    return <div></div>;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setpagereloader(!pagereloader);
    }, 650);
    return () => {
      clearTimeout(timer);
      setchangeStatus({});
    };
  }, [pagereloader]);

  switch (all.hasOwnProperty("visitor")) {
    case true:
      return <div>{Hide()}</div>;
      break;
    case false:
      return <div>{Show()}</div>;
      break;
    default:
      return null;
  }
}
