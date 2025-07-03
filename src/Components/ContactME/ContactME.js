import React, { useState, useEffect, Fragement } from "react";
import "./ContactME.css";
import EPC from "../../EPC/EPC";
import axios from "axios";
export default function ContactME() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  // --------------------------------------------
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // deconstructing the FormData object
  const { name, email, phone, message } = FormData;

  const onChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    var errorsArray = [];
    if (name === "" || email === "" || phone === "" || message === "") {
      setemptyError("Please fill all the fields");
      setArrayErrors([]);
    } else {
      setemptyError("");
      if (!pattern.test(name)) {
        errorsArray.push("Name should contain only letters");
      }
      if (!emailPattern.test(email)) {
        errorsArray.push("Please enter a valid email");
      }
      if (!phonePattern.test(phone)) {
        errorsArray.push("Please enter a valid phone number");
      }
      if (!messagePattern.test(message)) {
        errorsArray.push("Message should contain only letters and numbers");
      }
    }
    setArrayErrors(errorsArray);

    if (errorsArray.length === 0 && emptyError === "") {
      const data = {
        name: name,
        email: email,
        message: message,
        phone: phone,
      };
      // axios.post(EPC.Messages, data).then((res) => {
      //   if (res.data.errors === null || res.data.errors === undefined) {
      //     setArrayErrors([]);
      //     setemptyError("");
      //     clearForm();
      //   } else {
      //     setArrayErrors(res.data.errors);
      //     setemptyError("");
      //   }
      // });
    }
  };

  const [emptyError, setemptyError] = useState("");
  const [ArrayErrors, setArrayErrors] = useState([]);

  const [SubmitActiveStatus, setSubmitActiveStatus] = useState(false);
  // create pattern to accept only letters with space

  const pattern = /^[a-zA-Z ]+$/;
  // create pattern to accept only emails
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // create pattern to accept only phone numbers like 666 666 6666
  const phonePattern = /^\d{3} \d{3} \d{4}$/;
  // create pattern to accept numbers and letters with space and special characters
  const messagePattern = /^[a-zA-Z0-9 ]+$/;

  // prevent sql injection
  const preventSqlInjection = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function renderErrors() {
    return (
      <>
        <p>{ArrayErrors[0]}</p>
        <p>{ArrayErrors[1]}</p>
        <p>{ArrayErrors[2]}</p>
        <p>{ArrayErrors[3]}</p>
      </>
    );
  }
  // ------------------------------------------------------
  function submitColorChange() {
    if (name === "" || email === "" || phone === "" || message === "") {
      setSubmitActiveStatus(false);
      setemptyError("");
      setArrayErrors([]);
    } else {
      setSubmitActiveStatus(true);
    }
  }
  // ------------------------------------------------------

  useEffect(() => {
    submitColorChange();
  }, [name, email, phone, message]);

  return (
    <div id="ContactME" className="ContactME">
      <br />
      <br />
      <h1 className="Section_Title">
        <span className="Section_Title_Span" style={{ fontSize: screenSize * 0.05 }}>
          Contact Me
        </span>
      </h1>
      <br />
      <br />
      <div className="ContactME_Container" style={{ width: screenSize * 0.8 }}>
        <form onSubmit={onSubmit} className="Contact_Me_Form">
          <div className="ContactME_Container_Top">
            <input
              className="contact_input_field"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                onChange(e);
                preventSqlInjection(e);
              }}
            />
            <input
              className="contact_input_field"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                onChange(e);
                preventSqlInjection(e);
              }}
            />
            <input
              className="contact_input_field"
              type="text"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Phone Number 444 444 4444"
              onChange={(e) => {
                onChange(e);
                preventSqlInjection(e);
              }}
            />
          </div>
          <div className="ContactME_Container_Buttom">
            <textarea
              className="contact_input_text"
              type="text"
              id="message"
              name="message"
              value={message}
              placeholder="Message"
              onChange={(e) => {
                onChange(e);
                preventSqlInjection(e);
              }}
            />
          </div>
          {SubmitActiveStatus ? (
            <button className="contact_submit_active" type="submit">
              Submit
            </button>
          ) : (
            <button className="contact_submit_inActive">Submit</button>
          )}
        </form>
      </div>
      <div className="Errors">{ArrayErrors.length > 0 ? renderErrors() : emptyError === "" ? null : <p>{emptyError}</p>}</div>
    </div>
  );
}
