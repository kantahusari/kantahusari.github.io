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
    //------------------Test

    // const cookieToset = {
    //     "value": "hello from value",
    //     "name": "hello from name",
    //     "status": "hello from status"
    // }
    // cookie.set(cookieToset.name, JSON.stringify(cookieToset))
    // console.log(cookie.get(cookieToset.name).value)


    //------------------Test
    function submitForm() {
        if (email === "" || password === "") {
            seterrorMessage("some fields are missing")
            setSerrorMessage("")
        } else {
            if (email !== "" && password !== "") {
                const request = {
                    email: email,
                    password: password,
                }
                axios.post("https://appzero0.herokuapp.com/user/login", request).then(
                    res => {
                        if (res.data.errors === null || res.data.errors === undefined) {
                            if (res.status === 200) {
                                seterrorMessage("")
                                setSerrorMessage("")
                                setemail("")
                                setpassword("")
                                // const cookieToset = {
                                //     "value": res.data.value,
                                //     "name": res.data.name,
                                //     "status": res.data.status
                                // }
                                // cookie.set(`${cookieToset.name}`, cookieToset.value)
                                cookie.set(res.data.name, JSON.stringify(res.data))
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
                    setemail("")
                    setpassword("")
                })

            }
        }
    }
    return (
        <div className="loginForm">
            <div className="returnbar">
                <div className="backbutton"
                    onClick={() => {
                        cookie.remove("admin")
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
