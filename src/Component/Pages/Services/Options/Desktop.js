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
import React, { useState, useEffect } from 'react'
import "../Services.css"
import axios from "axios"
export default function Desktop() {

    const [optionsWidth, setoptionsWidth] = useState(window.innerWidth * (70 / 100))
    const [prenextfontSize, setprenextfontSize] = useState(window.innerWidth * (3 / 100))
    const [width, setwidth] = useState(window.innerWidth * (50 / 100))

    const [desktopBlock, setdesktopBlock] = useState("block")

    const [name, setname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [message, setmessage] = useState("")


    const [nameerror, setnameerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [emailerror, setemailerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [PhoneNumbererror, setPhoneNumbererror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [messageerror, setmessageerror] = useState("2px solid rgba(0, 128, 0, 0)")



    const [errorMessage, seterrorMessage] = useState("")
    const [SerrorMessage, setSerrorMessage] = useState("")

    function submitForm() {

        if (name === "" || EmailAddress === "" || PhoneNumber === "" || message === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setSerrorMessage("")
        } else {
            seterrorMessage("")
        }
        if (name === "") {
            setnameerror("2px solid red")
        } else {
            setnameerror("2px solid rgba(0, 128, 0, 0)")
        }
        if (EmailAddress === "") {
            setemailerror("2px solid red")
        } else {
            setemailerror("2px solid rgba(0, 128, 0, 0)")
        }
        if (PhoneNumber === "") {
            setPhoneNumbererror("2px solid red")
        } else {
            setPhoneNumbererror("2px solid rgba(0, 128, 0, 0)")
        }
        if (message === "") {
            setmessageerror("2px solid red")
        } else {
            setmessageerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (name !== "" && EmailAddress !== "" && PhoneNumber !== "" && message !== "") {
            const request = {
                serviceName: "Desktop",
                name: name.replace(/[^a-zA-Z0-9_-]/g, ' '),
                email: EmailAddress,
                PhoneNumber: PhoneNumber,
                message: message.replace(/[^a-zA-Z0-9_-]/g, ' ')
            }

            axios.post("https://appzero0.herokuapp.com/guest/estdesktop", request).then(
                res => {
                    if (res.data.errors === null || res.data.errors === undefined) {
                        seterrorMessage("")
                        setSerrorMessage("")
                        setname("")
                        setEmailAddress("")
                        setPhoneNumber("")
                        setmessage("")
                        setdesktopBlock("none")
                        window.location.reload()

                    } else {
                        if (res.data.errors.hasOwnProperty("email")) {
                            setSerrorMessage("Please enter valid information")
                            setemailerror("2px solid red")
                        }
                        if (res.data.errors.hasOwnProperty("phone")) {
                            setSerrorMessage("Please enter valid information")
                            setPhoneNumbererror("2px solid red")
                        }
                    }
                }
            ).catch(err => {
                seterrorMessage("")
                setSerrorMessage("")
                setname("")
                setEmailAddress("")
                setPhoneNumber("")
                setmessage("")
                setdesktopBlock("none")
                window.location.reload()

            })
        }
    }

    function changeSize() {
        setoptionsWidth(window.innerWidth * (70 / 100))
        if (window.innerWidth < 960) {
            setprenextfontSize(window.innerWidth * (5 / 100))

            setwidth(window.innerWidth * (80 / 100))
        } else {
            setprenextfontSize(window.innerWidth * (2 / 100))

            setwidth(window.innerWidth * (40 / 100))
        }
    }

    useEffect(() => {
        changeSize();
        return () => {
            setoptionsWidth({ })
            setprenextfontSize({ })
            setwidth({ })
        }
    }, []);
    window.addEventListener('resize', changeSize)
    return (
        <div>
            {/* desktop sub services*/}
            <div className="selectService"
                style={{ width: optionsWidth, display: desktopBlock }}
            >
                <br />
                Let's Talk !!!
                <br />
                <input className="ServiceinputField" placeholder="Name" type="text" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Phone: 555-555-5555" type="tel" value={PhoneNumber} onChange={(event) => { event.preventDefault(); setPhoneNumber(event.target.value) }} style={{ border: PhoneNumbererror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Email" type="email" value={EmailAddress} onChange={(event) => { event.preventDefault(); setEmailAddress(event.target.value) }} style={{ border: emailerror, width: width }}></input><br />
                <textarea className="MessageServiceinputField" placeholder="Description" value={message} onChange={(event) => { event.preventDefault(); setmessage(event.target.value) }} style={{ border: messageerror, width: width }}></textarea ><br />
                <div className="suboptioncontrol" >
                    <div></div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { submitForm() }}>Submit</div>
                </div>
            </div>

            <br />
            <br />
            <h4 style={{ color: "#7d0900" }}>{errorMessage}</h4>
            <h4 style={{ color: "#7d0900" }}>{SerrorMessage}</h4>
            <br />
            <br />


        </div>
    )
}
