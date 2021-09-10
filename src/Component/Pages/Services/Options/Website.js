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

import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "../Services.css"
import axios from "axios"

export default function Website() {
    const history = useHistory()


    const [optionsWidth, setoptionsWidth] = useState(window.innerWidth * (70 / 100))
    const [prenextfontSize, setprenextfontSize] = useState(window.innerWidth * (3 / 100))
    const [optionTextSize, setoptionTextSize] = useState(window.innerWidth * (2 / 100))
    const [width, setwidth] = useState(window.innerWidth * (50 / 100))


    const [errorMessage, seterrorMessage] = useState("")
    const [SerrorMessage, setSerrorMessage] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [name, setname] = useState("")
    const [nameerror, setnameerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [emailerror, setemailerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [phoneerror, setphoneerror] = useState("2px solid rgba(0, 128, 0, 0)")

    const [websitetypeDialogue, setwebsitetypeDialogue] = useState("block")
    const [websiteNumberOfPagesDialogue, setwebsiteNumberOfPagesDialogue] = useState("none")
    const [websiteDesignDialogue, setwebsiteDesignDialogue] = useState("none")
    const [websiteDataStorageDialogue, setwebsiteDataStorageDialogue] = useState("none")
    const [websitePlatformDialogue, setwebsitePlatformDialogue] = useState("none")
    const [websiteConfigurationDialogue, setwebsiteConfigurationDialogue] = useState("none")
    const [websiteFinalForm, setwebsiteFinalForm] = useState("none")


    const [basicChecked, setbasicChecked] = useState(false)
    const [prochecked, setprochecked] = useState(false)

    const [ownDesginChecked, setownDesginChecked] = useState(false)
    const [needDesignChecked, setneedDesignChecked] = useState(false)

    const [needDataStorageChecked, setneedDataStorageChecked] = useState(false)
    const [noneedDataStorageChecked, setnoneedDataStorageChecked] = useState(false)

    const [standardWordPressChecked, setstandardWordPressChecked] = useState(false)
    const [customPlatformChecked, setcustomPlatformChecked] = useState(false)

    const [onlySourceCodeChecked, setonlySourceCodeChecked] = useState(false)
    const [withDeplymentChecked, setwithDeplymentChecked] = useState(false)


    const [webtype, setwebtype] = useState("")
    const [webNumberOfPages, setwebNumberOfPages] = useState(1)
    const [webDesign, setwebDesign] = useState("")
    const [webStorage, setwebStorage] = useState("")
    const [websitePlatform, setwebsitePlatform] = useState("")
    const [websiteConfiguration, setwebsiteConfiguration] = useState("")



    function websitetypepickup(event) {
        setwebtype(event)
        if (event === "") {
            setbasicChecked(false)
            setprochecked(false)
        } else {
            if (event === "Basic") {
                setbasicChecked(true)
                setprochecked(false)
            } else {
                if (event === "Pro") {
                    setbasicChecked(false)
                    setprochecked(true)
                }
            }
        }
    }

    function websiteDesignOption(event) {
        setwebDesign(event)
        if (event === "") {
            setownDesginChecked(false)
            setneedDesignChecked(false)
        } else {
            if (event === "OwnDesign") {
                setownDesginChecked(true)
                setneedDesignChecked(false)
            } else {
                if (event === "NeedDesign") {
                    setownDesginChecked(false)
                    setneedDesignChecked(true)
                }
            }
        }
    }

    function websiteStorageOption(event) {
        setwebStorage(event)
        if (event === "") {
            setneedDataStorageChecked(false)
            setnoneedDataStorageChecked(false)
        } else {
            if (event === "Yes") {
                setneedDataStorageChecked(true)
                setnoneedDataStorageChecked(false)
            } else {
                if (event === "No") {
                    setneedDataStorageChecked(false)
                    setnoneedDataStorageChecked(true)
                }
            }
        }
    }

    function websitePlatformOption(event) {
        setwebsitePlatform(event)
        if (event === "") {
            setstandardWordPressChecked(false)
            setcustomPlatformChecked(false)
        } else {
            if (event === "WordPress") {
                setstandardWordPressChecked(true)
                setcustomPlatformChecked(false)
            } else {
                if (event === "Custom") {
                    setstandardWordPressChecked(false)
                    setcustomPlatformChecked(true)
                }
            }
        }
    }

    function websiteConfigurationOption(event) {
        setwebsiteConfiguration(event)
        if (event === "") {
            setonlySourceCodeChecked(false)
            setwithDeplymentChecked(false)
        } else {
            if (event === "WebOnlyCode") {
                setonlySourceCodeChecked(true)
                setwithDeplymentChecked(false)
            } else {
                if (event === "WebDeploy") {
                    setonlySourceCodeChecked(false)
                    setwithDeplymentChecked(true)
                }
            }
        }
    }

    function resetForms() {
        setwebtype("")
        setwebNumberOfPages(1)
        websiteDesignOption("")
        websiteStorageOption("")
        websitePlatformOption("")
        websiteConfigurationOption("")

        setPhoneNumber("")
        setEmailAddress("")
        setname("")
        setSerrorMessage("")
        setnameerror("2px solid rgba(0, 128, 0, 0)")
        setemailerror("2px solid rgba(0, 128, 0, 0)")
        setphoneerror("2px solid rgba(0, 128, 0, 0)")
    }



    function fromtypenext() {
        if (webtype === "") {
            seterrorMessage("Please Select an Option")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("block")
            setwebsiteDesignDialogue("none")
            setwebsiteDataStorageDialogue("none")
            setwebsitePlatformDialogue("none")
            setwebsiteConfigurationDialogue("none")
            setwebsiteFinalForm("none")
        }
    }


    function frompagenumberprevious() {
        seterrorMessage("")
        setwebsitetypeDialogue("block")
        setwebsiteNumberOfPagesDialogue("none")
        setwebsiteDesignDialogue("none")
        setwebsiteDataStorageDialogue("none")
        setwebsitePlatformDialogue("none")
        setwebsiteConfigurationDialogue("none")
        setwebsiteFinalForm("none")

        setwebNumberOfPages(1)
    }
    function frompagenumbernext() {
        if (webNumberOfPages > 50 || webNumberOfPages < 1) {
            seterrorMessage("Please pick a number from 1 to 50")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("none")
            setwebsiteDesignDialogue("block")
            setwebsiteDataStorageDialogue("none")
            setwebsitePlatformDialogue("none")
            setwebsiteConfigurationDialogue("none")
            setwebsiteFinalForm("none")
        }
    }

    function fromdesignpreveious() {
        seterrorMessage("")
        setwebsitetypeDialogue("none")
        setwebsiteNumberOfPagesDialogue("block")
        setwebsiteDesignDialogue("none")
        setwebsiteDataStorageDialogue("none")
        setwebsitePlatformDialogue("none")
        setwebsiteConfigurationDialogue("none")
        setwebsiteFinalForm("none")

        websiteDesignOption("")
    }
    function fromdesignnext() {
        if (webDesign === "") {
            seterrorMessage("Please Select an Option")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("none")
            setwebsiteDesignDialogue("none")
            setwebsiteDataStorageDialogue("block")
            setwebsitePlatformDialogue("none")
            setwebsiteConfigurationDialogue("none")
            setwebsiteFinalForm("none")
        }
    }

    function fromwebstorageprevious() {
        seterrorMessage("")
        setwebsitetypeDialogue("none")
        setwebsiteNumberOfPagesDialogue("none")
        setwebsiteDesignDialogue("block")
        setwebsiteDataStorageDialogue("none")
        setwebsitePlatformDialogue("none")
        setwebsiteConfigurationDialogue("none")
        setwebsiteFinalForm("none")

        websiteStorageOption("")
    }
    function fromwebstoragenext() {
        if (webStorage === "") {
            seterrorMessage("Please Select an Option")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("none")
            setwebsiteDesignDialogue("none")
            setwebsiteDataStorageDialogue("none")
            setwebsitePlatformDialogue("block")
            setwebsiteConfigurationDialogue("none")
            setwebsiteFinalForm("none")
        }
    }

    function fromwebsiteplatformprevious() {
        seterrorMessage("")
        setwebsitetypeDialogue("none")
        setwebsiteNumberOfPagesDialogue("none")
        setwebsiteDesignDialogue("none")
        setwebsiteDataStorageDialogue("block")
        setwebsitePlatformDialogue("none")
        setwebsiteConfigurationDialogue("none")
        setwebsiteFinalForm("none")

        websitePlatformOption("")
    }
    function fromwebsiteplatformnext() {
        if (websitePlatform === "") {
            seterrorMessage("Please Select an Option")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("none")
            setwebsiteDesignDialogue("none")
            setwebsiteDataStorageDialogue("none")
            setwebsitePlatformDialogue("none")
            setwebsiteConfigurationDialogue("block")
            setwebsiteFinalForm("none")
        }
    }

    function fromwebconfigprevious() {
        seterrorMessage("")
        setwebsitetypeDialogue("none")
        setwebsiteNumberOfPagesDialogue("none")
        setwebsiteDesignDialogue("none")
        setwebsiteDataStorageDialogue("none")
        setwebsitePlatformDialogue("block")
        setwebsiteConfigurationDialogue("none")
        setwebsiteFinalForm("none")

        websiteConfigurationOption("")
    }
    function fromwebconfignext() {
        if (websiteConfiguration === "") {
            seterrorMessage("Please Select an Option")
        } else {
            seterrorMessage("")
            setwebsitetypeDialogue("none")
            setwebsiteNumberOfPagesDialogue("none")
            setwebsiteDesignDialogue("none")
            setwebsiteDataStorageDialogue("none")
            setwebsitePlatformDialogue("none")
            setwebsiteConfigurationDialogue("none")
            setwebsiteFinalForm("block")
        }
    }

    function fromcontactinfoprevious() {
        seterrorMessage("")
        setwebsitetypeDialogue("none")
        setwebsiteNumberOfPagesDialogue("none")
        setwebsiteDesignDialogue("none")
        setwebsiteDataStorageDialogue("none")
        setwebsitePlatformDialogue("none")
        setwebsiteConfigurationDialogue("block")
        setwebsiteFinalForm("none")

        setPhoneNumber("")
        setEmailAddress("")
        setname("")

        setnameerror("2px solid rgba(0, 128, 0, 0)")
        setemailerror("2px solid rgba(0, 128, 0, 0)")
        setphoneerror("2px solid rgba(0, 128, 0, 0)")

    }
    function fromcontactinfosubmit() {

        if (name === "" || EmailAddress === "" || PhoneNumber === "") {
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
            setphoneerror("2px solid red")
        } else {
            setphoneerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (name !== "" && EmailAddress !== "" && PhoneNumber !== "") {

            const request = {
                serviceName: "Web",
                webtype: webtype,
                webNumberOfPages: webNumberOfPages,
                webDesign: webDesign,
                webStorage: webStorage,
                websitePlatform: websitePlatform,
                websiteConfiguration: websiteConfiguration,
                name: name.replace(/[^a-zA-Z0-9_-]/g, ' '),
                email: EmailAddress,
                phone: PhoneNumber
            }

            axios.post("https://appzero0.herokuapp.com/guest/estweb", request).then(
                res => {

                    if (res.data.errors === null || res.data.errors === undefined) {
                        resetForms()
                        setwebsiteFinalForm("none")
                        window.location.reload()
                    } else {
                        if (res.data.errors.hasOwnProperty("email")) {
                            setSerrorMessage("Please enter valid information")
                            setemailerror("2px solid red")
                        }
                        if (res.data.errors.hasOwnProperty("phone")) {
                            setSerrorMessage("Please enter valid information")
                            setphoneerror("2px solid red")
                        }
                    }
                }
            ).catch(err => {
                resetForms()
                setwebsiteFinalForm("none")
                window.location.reload()
            })




        }
    }



    function changeSize() {
        setoptionsWidth(window.innerWidth * (70 / 100))
        if (window.innerWidth < 960) {
            setoptionTextSize(window.innerWidth * (3.5 / 100))
            setprenextfontSize(window.innerWidth * (5 / 100))

            setwidth(window.innerWidth * (80 / 100))
        } else {
            setprenextfontSize(window.innerWidth * (2 / 100))
            setoptionTextSize(window.innerWidth * (2 / 100))

            setwidth(window.innerWidth * (40 / 100))
        }
    }

    useEffect(() => {
        changeSize();
        return () => {
            setoptionsWidth({ })
            setoptionTextSize({ })
            setprenextfontSize({ })
            setwidth({ })
        }
    }, []);
    window.addEventListener('resize', changeSize)


    return (
        <div>

            <div className="selectService"
                style={{ width: optionsWidth, display: websitetypeDialogue }}
            >
                <br />
                Web Site Type
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="Basic" name="websitetype" className="option" onChange={(event) => { websitetypepickup(event.target.value) }} checked={basicChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Basic</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Pro" name="websitetype" className="option" onChange={(event) => { websitetypepickup(event.target.value) }} checked={prochecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Pro</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div ></div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromtypenext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: websiteNumberOfPagesDialogue }}
            >
                <br />
                Number Of Pages
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <label className="formLabel" style={{ fontSize: optionTextSize }}>Set a number</label>
                        <input type="number" min="1" max="50" value={webNumberOfPages} className="numberofpages" onChange={(event) => { event.preventDefault(); setwebNumberOfPages(event.target.value) }} style={{ width: optionTextSize + 25, height: optionTextSize, fontSize: optionTextSize }} />
                    </li>

                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { frompagenumberprevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { frompagenumbernext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: websiteDesignDialogue }}
            >
                <br />
                Website Design
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="OwnDesign" name="websiteDesign" className="option" onChange={(event) => { websiteDesignOption(event.target.value) }} checked={ownDesginChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>I have a Design</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="NeedDesign" name="websiteDesign" className="option" onChange={(event) => { websiteDesignOption(event.target.value) }} checked={needDesignChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>I need a Design</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromdesignpreveious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromdesignnext() }}>Next</div>
                </div>
            </div>

            <div className="selectService"
                style={{ width: optionsWidth, display: websiteDataStorageDialogue }}
            >
                <br />
                Data Storage
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="Yes" name="websiteStorage" className="option" onChange={(event) => { websiteStorageOption(event.target.value) }} checked={needDataStorageChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Yes</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="No" name="websiteStorage" className="option" onChange={(event) => { websiteStorageOption(event.target.value) }} checked={noneedDataStorageChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>No</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebstorageprevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebstoragenext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: websitePlatformDialogue }}
            >
                <br />
                Platform
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="WordPress" name="websiteplatform" className="option" onChange={(event) => { websitePlatformOption(event.target.value) }} checked={standardWordPressChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Standard WordPress</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Custom" name="websiteplatform" className="option" onChange={(event) => { websitePlatformOption(event.target.value) }} checked={customPlatformChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Custom</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebsiteplatformprevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebsiteplatformnext() }}>Next</div>
                </div>
            </div>

            <div className="selectService"
                style={{ width: optionsWidth, display: websiteConfigurationDialogue }}
            >
                <br />
                Configuration
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="WebOnlyCode" name="websiteConf" className="option" onChange={(event) => { websiteConfigurationOption(event.target.value) }} checked={onlySourceCodeChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Only Source Code</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="WebDeploy" name="websiteConf" className="option" onChange={(event) => { websiteConfigurationOption(event.target.value) }} checked={withDeplymentChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Source Code With Deployment</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebconfigprevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromwebconfignext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: websiteFinalForm }}
            >
                <br />
                Contact Information
                <br />
                <input className="ServiceinputField" placeholder="Name" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Phone: 555-555-5555" type="tel" value={PhoneNumber} onChange={(event) => { event.preventDefault(); setPhoneNumber(event.target.value) }} style={{ border: phoneerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Email" type="email" value={EmailAddress} onChange={(event) => { event.preventDefault(); setEmailAddress(event.target.value) }} style={{ border: emailerror, width: width }}></input><br />

                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromcontactinfoprevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromcontactinfosubmit() }}>Submit</div>
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
