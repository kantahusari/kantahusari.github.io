/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import "./ContactMe.css"

import { useHistory } from "react-router-dom"
import { formatPhoneNumber } from 'react-phone-number-input'

import axios from "axios"

export default function ContactMe() {
    const history = useHistory()

    const [SerrorMessage, setSerrorMessage] = useState("")

    const [name, setname] = useState("")
    const [emailaddress, setemailaddress] = useState("")
    const [phone, setphone] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")


    const [nameerror, setnameerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [emailerror, setemailerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [phoneerror, setphoneerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [subjecterror, setsubjecterror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [messageerror, setmessageerror] = useState("2px solid rgba(0, 128, 0, 0)")

    const [minWidth, setminWidth] = useState("")
    const [maxWidth, setmaxWidth] = useState("")

    const [width, setwidth] = useState(window.innerWidth * (50 / 100))


    const [errorMessage, seterrorMessage] = useState("")

    async function submitForm() {
        if (name === "" || emailaddress === "" || phone === "" || subject === "" || message === "") {
            seterrorMessage("Please Fill Empty Field(s)")
        } else {
            seterrorMessage("")
        }
        if (name === "") {
            setnameerror("2px solid red")
        } else {
            setnameerror("2px solid rgba(0, 128, 0, 0)")
        }
        if (emailaddress === "") {
            setemailerror("2px solid red")
        } else {
            setemailerror("2px solid rgba(0, 128, 0, 0)")
        }
        if (phone === "") {
            setphoneerror("2px solid red")
        } else {
            setphoneerror("2px solid rgba(0, 128, 0, 0)")
        }
        if (subject === "") {
            setsubjecterror("2px solid red")
        } else {
            setsubjecterror("2px solid rgba(0, 128, 0, 0)")
        }
        if (message === "") {
            setmessageerror("2px solid red")
        } else {
            setmessageerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (name !== "" && emailaddress !== "" && phone !== "" && subject !== "" && message !== "") {
            const request = {
                name: name.replace(/[^a-zA-Z0-9_-]/g, ' '),
                email: emailaddress,
                phone: phone,
                subject: subject.replace(/[^a-zA-Z0-9_-]/g, ' '),
                message: message.replace(/[^a-zA-Z0-9_-]/g, ' ')
            }
            axios.post("https://appzero0.herokuapp.com/guest/pingme", request).then(
                res => {
                    if (res.data.errors === null || res.data.errors === undefined) {
                        seterrorMessage("")
                        setname("")
                        setemailaddress("")
                        setphone("")
                        setsubject("")
                        setmessage("")
                        setSerrorMessage("")
                    } else {
                        if (res.data.errors.hasOwnProperty("email")) {
                            setSerrorMessage("Please enter valid information")
                            setemailerror("2px solid red")
                        }
                        if (res.data.errors.hasOwnProperty("phone")) {
                            setSerrorMessage("Please enter valid information")
                            setphoneerror("2px solid red")
                        }
                        if (res.data.errors.hasOwnProperty("subject")) {
                            setSerrorMessage("Please enter valid information")
                            setsubjecterror("2px solid red")
                        }
                        if (res.data.errors.hasOwnProperty("message")) {
                            setSerrorMessage("Please enter valid information")
                            setmessageerror("2px solid red")
                        }

                    }
                }
            ).catch(err => {
                seterrorMessage("")
                setname("")
                setemailaddress("")
                setphone("")
                setsubject("")
                setmessage("")
                setSerrorMessage("")
            })

        }

    }

    function ChangeWidth() {
        if (window.innerWidth < 960) {
            setwidth(window.innerWidth * (80 / 100))
        } else {
            setwidth(window.innerWidth * (40 / 100))
        }
    }

    useEffect(() => {
        ChangeWidth();
        return () => {
            setwidth({ })
        }
    }, []);

    window.addEventListener('resize', ChangeWidth)
    return (
        <div className="ContactMeCont">
            <div>
                <h1>Get in touch</h1>
            </div>
            <input className="inputField" placeholder="Name" type="text" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror, width: width }}></input><br />
            <input className="inputField" placeholder="Email" type="email" value={emailaddress} onChange={(event) => { event.preventDefault(); setemailaddress(event.target.value) }} style={{ border: emailerror, width: width }}></input><br />
            <input className="inputField" placeholder="Phone: 555-555-5555" type="tel" value={phone} onChange={(event) => { event.preventDefault(); setphone(event.target.value) }} style={{ border: phoneerror, width: width }}></input><br />
            <input className="inputField" placeholder="Subject" type="text" value={subject} onChange={(event) => { event.preventDefault(); setsubject(event.target.value) }} style={{ border: subjecterror, width: width }}></input><br />
            <textarea className="textfield" placeholder="Message" type="text" value={message} onChange={(event) => { event.preventDefault(); setmessage(event.target.value) }} style={{ border: messageerror, width: width }}></textarea ><br />
            <br />
            <div className="submit" onClick={() => submitForm()} style={{ width: width }}>Send</div><br />

            <div style={{ marginBottom: "50px", marginTop: "15px" }}>
                <h4 style={{ color: "#7d0900" }}>{errorMessage}</h4>
                <h4 style={{ color: "#7d0900" }}>{SerrorMessage}</h4>
            </div>
        </div>
    )
}