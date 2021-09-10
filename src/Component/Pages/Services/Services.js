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
import "./Services.css"
import InfoBar from "../../InfoBar/InfoBar"
import TopNav from "../../TopNav/TopNav"
import FooterBar from "../../FooterBar/FooterBar"

import Website from "./Options/Website"
import Mobile from "./Options/Mobile"
import Desktop from "./Options/Desktop"
import Database from "./Options/Database"



export default function Services() {
    const Services = {
        web: "Websites",
        mobile: "Mobile Applications",
        desktop: "Desktop",
        databases: "Databases",
    }
    const [optionsWidth, setoptionsWidth] = useState(window.innerWidth * (70 / 100))
    const [prenextfontSize, setprenextfontSize] = useState(window.innerWidth * (3 / 100))
    const [optionTextSize, setoptionTextSize] = useState(window.innerWidth * (2 / 100))


    const [dismissViews, setdismissViews] = useState(false)

    const [getquotatext, setgetquotatext] = useState('Get Quota +')

    const [StartQuota, setStartQuota] = useState(false)

    const [servicesDialogue, setservicesDialogue] = useState("none")

    const [setService, setsetService] = useState("")


    const [websiteChecked, setwebsiteChecked] = useState(false)
    const [isWeb, setisWeb] = useState(false)

    const [mobAppChecked, setmobAppChecked] = useState(false)
    const [isMobile, setisMobile] = useState(false)

    const [desktopChecked, setdesktopChecked] = useState(false)
    const [isDesktop, setisDesktop] = useState(false)

    const [databaseChecked, setdatabaseChecked] = useState(false)
    const [isDatabase, setisDatabase] = useState(false)

    const [errorMessage, seterrorMessage] = useState("")

    const [mobileapplicationplatform, setmobileapplicationplatform] = useState("none")
    const [desktopContactMe, setdesktopContactMe] = useState("none")
    const [databaseserviceType, setdatabaseserviceType] = useState("none")




    function startQuotaFunction() {
        if (setService === "") {
            setStartQuota(true)
            setservicesDialogue("block")
            setgetquotatext('Get Quota -')
        } else {
            if (getquotatext === "Get Quota -") {
                return
            }
            // return
            setservicesDialogue("none")
            setgetquotatext('Get Quota +')

            setwebsiteChecked(false)
            setmobAppChecked(false)
            setdesktopChecked(false)
            setdatabaseChecked(false)


            setisWeb(false)
            setisMobile(false)
            setisDesktop(false)
            setisDatabase(false)
            setsetService("")
            seterrorMessage("")
        }
    }

    function servicePickUp(event) {
        setsetService(event)
        if (event === "") {
            setwebsiteChecked(false)
            setmobAppChecked(false)
            setdesktopChecked(false)
            setdatabaseChecked(false)
        } else {
            if (event === "Website") {
                setwebsiteChecked(true)
                setmobAppChecked(false)
                setdesktopChecked(false)
                setdatabaseChecked(false)
            } else {
                if (event === "MobileApplication") {
                    setmobAppChecked(true)
                    setwebsiteChecked(false)
                    setdesktopChecked(false)
                    setdatabaseChecked(false)
                } else {
                    if (event === "Desktop") {
                        setdesktopChecked(true)
                        setwebsiteChecked(false)
                        setmobAppChecked(false)
                        setdatabaseChecked(false)
                    } else {
                        if (event === "Database") {
                            setdatabaseChecked(true)
                            setwebsiteChecked(false)
                            setmobAppChecked(false)
                            setdesktopChecked(false)
                        }
                    }
                }
            }
        }
    }

    function cancel() {
        setStartQuota(false)

        setservicesDialogue("none")
        setgetquotatext('Get Quota +')
        seterrorMessage("")

        //reset service option
        setsetService("")

        //reset service checked
        setwebsiteChecked(false)
        setmobAppChecked(false)
        setdesktopChecked(false)
        setdatabaseChecked(false)

        setisWeb(false)
        setisMobile(false)
        setisDesktop(false)
        setisDatabase(false)
        //reset all other options
    }


    function next() {
        if (setService === "") {
            seterrorMessage("Please select an option")
        } else {
            setservicesDialogue("none")
            setStartQuota(false)
            setgetquotatext('Cancel -')
            if (setService === "Website") {
                setisWeb(true)
                setisMobile(false)
                setisDesktop(false)
                setisDatabase(false)
            } else {
                if (setService === "MobileApplication") {
                    setisWeb(false)
                    setisMobile(true)
                    setisDesktop(false)
                    setisDatabase(false)

                } else {
                    if (setService === "Desktop") {
                        setisWeb(false)
                        setisMobile(false)
                        setisDesktop(true)
                        setisDatabase(false)
                    } else {
                        if (setService === "Database") {
                            setisWeb(false)
                            setisMobile(false)
                            setisDesktop(false)
                            setisDatabase(true)
                        }
                    }
                }
            }
            seterrorMessage("")
        }
    }
    function changeSize() {
        setoptionsWidth(window.innerWidth * (70 / 100))
        if (window.innerWidth < 960) {
            setprenextfontSize(window.innerWidth * (5 / 100))
            setoptionTextSize(window.innerWidth * (3.5 / 100))
        } else {
            setprenextfontSize(window.innerWidth * (2 / 100))
            setoptionTextSize(window.innerWidth * (2 / 100))
        }
    }

    useEffect(() => {
        changeSize();
        return () => {
            setoptionsWidth({})
            setprenextfontSize({})
            setoptionTextSize({})
        }
    }, []);
    window.addEventListener('resize', changeSize)

    return (

        <div className="servicescont">
            <InfoBar />
            <TopNav />
            <br />
            <br />
            <div className="servicesss">
                <h1 className="servicetext">{Services.web}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.mobile}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.desktop}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.databases}</h1>
            </div>

            {/* Start Here */}
            <div className="getQuota"
                onClick={() => { startQuotaFunction() }}>{getquotatext}
            </div>
            <br />
            <h1 style={{ color: "#7d0900" }}>{errorMessage}</h1>

            {/* select service */}

            <div className="selectService"
                style={{ width: optionsWidth, display: servicesDialogue }}>
                <br />
                <h4 >Select Service</h4>
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="Website" name="service" className="option" onChange={(event) => { servicePickUp(event.target.value) }} checked={websiteChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Website</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="MobileApplication" name="service" className="option" onChange={(event) => { servicePickUp(event.target.value) }} checked={mobAppChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Mobile Application</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Desktop" name="service" className="option" onChange={(event) => { servicePickUp(event.target.value) }} checked={desktopChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Desktop</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Database" name="service" className="option" onChange={(event) => { servicePickUp(event.target.value) }} checked={databaseChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Database</label>
                    </li>
                </ul>

                <br />
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { cancel() }}>Cancel</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { next() }}>Next</div>
                </div>
            </div>

            {
                isWeb ? <Website /> :
                    isMobile ? <Mobile /> :
                        isDesktop ? <Desktop /> :
                            isDatabase ? <Database /> :
                                false
            }
            <br />
            <br />
            <br />
            <FooterBar />
        </div>
    )
}
