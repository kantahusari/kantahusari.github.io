/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import axios from "axios"
import Cookies from 'universal-cookie';
import "./Login.css"
export default function Login() {
    const history = useHistory()
    const cookie = new Cookies()
    const all = cookie.getAll()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [errorMessage, seterrorMessage] = useState("")
    const [SerrorMessage, setSerrorMessage] = useState("")

    function submitForm() {
        if (email === "" || password === "") {
            seterrorMessage("some fields are missing")
            setSerrorMessage("")
        } else {
            if (email !== "" && password !== "") {
                const request = {
                    email: email.replace(/[^a-zA-Z0-9_-]/g, ' '),
                    password: password.replace(/[^a-zA-Z0-9_-]/g, ' '),
                }
                axios.post("https://appzero0.herokuapp.com/user/login", request).then(
                    res => {
                        if (res.data.errors === null || res.data.errors === undefined) {
                            //show res here
                            if (res.data.status === true) {
                                seterrorMessage("")
                                setSerrorMessage("")
                                setemail("")
                                setpassword("")
                                const cookieToset = {
                                    status: res.data.status,
                                }
                                cookie.set(`${res.data.user}`, cookieToset)
                                history.push("/Calendar")
                            } else {
                                // seterrorMessage("Unauthorized Access")
                                setSerrorMessage("")
                                seterrorMessage("")
                                setemail("")
                                setpassword("")
                            }
                        } else {
                            if (res.data.errors.hasOwnProperty("email")) {
                                setSerrorMessage("UnAuthorized Access")
                            }
                            if (res.data.errors.hasOwnProperty("password")) {
                                setSerrorMessage("UnAuthorized Access")
                            }
                        }
                    }
                ).catch(err => {
                    seterrorMessage("")
                    setSerrorMessage("")
                })

            }
        }
    }
    return (
        <div className="loginForm">
            <div className="returnbar">
                <div className="backbutton"
                    onClick={() => {
                        history.push("/")
                    }}

                >{`<---`}</div>
            </div>

            <input className="logininput" placeholder="username" type="text" value={email} onChange={(event) => { event.preventDefault(); setemail(event.target.value) }} ></input><br />
            <input className="logininput" placeholder="password" type="password" value={password} onChange={(event) => { event.preventDefault(); setpassword(event.target.value) }} ></input><br />
            <div className="loginsubmit" onClick={() => submitForm()} >Login</div><br />
            <div style={{ marginBottom: "50px", marginTop: "15px" }}>
                <h4 style={{ color: "#7d0900" }}>{errorMessage}</h4>
                <h4 style={{ color: "#7d0900" }}>{SerrorMessage}</h4>
            </div>
        </div>
    )
}
