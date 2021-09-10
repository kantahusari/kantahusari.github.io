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

export default function Mobile() {



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



    const [platformBlock, setplatformBlock] = useState("block")
    const [numberofviewsBlock, setnumberofviewsBlock] = useState("none")
    const [designBlock, setdesignBlock] = useState("none")
    const [configurationBlock, setconfigurationBlock] = useState("none")
    const [contactBlock, setcontactBlock] = useState("none")


    const [iosChecked, setiosChecked] = useState(false)
    const [androidChecked, setandroidChecked] = useState(false)

    const [owdesignChecked, setowdesignChecked] = useState(false)
    const [needdesignChecked, setneeddesignChecked] = useState(false)

    const [onlycodeChecked, setonlycodeChecked] = useState(false)
    const [withdeployChecked, setwithdeployChecked] = useState(false)



    const [platformChoice, setplatformChoice] = useState("")
    const [numberofpagesChoice, setnumberofpagesChoice] = useState(1)
    const [designChoice, setdesignChoice] = useState("")
    const [configurationChoice, setconfigurationChoice] = useState("")


    function resetForms() {

        setplatformChoice("")
        setnumberofpagesChoice(1)
        setdesignChoice("")
        setconfigurationChoice("")


        setPhoneNumber("")
        setEmailAddress("")
        setname("")

        setnameerror("2px solid rgba(0, 128, 0, 0)")
        setemailerror("2px solid rgba(0, 128, 0, 0)")
        setphoneerror("2px solid rgba(0, 128, 0, 0)")

        setSerrorMessage("")
    }


    function platformSelect(event) {
        setplatformChoice(event)
        if (event === "") {
            setiosChecked(false)
            setandroidChecked(false)
        } else {
            if (event === "IOS") {
                setiosChecked(true)
                setandroidChecked(false)
            } else {
                if (event === "Android") {
                    setiosChecked(false)
                    setandroidChecked(true)
                }
            }
        }
    }

    function designSelection(event) {
        setdesignChoice(event)
        if (event === "") {
            setowdesignChecked(false)
            setneeddesignChecked(false)
        } else {
            if (event === "OwnDesign") {
                setowdesignChecked(true)
                setneeddesignChecked(false)
            } else {
                if (event === "NeedDesign") {
                    setowdesignChecked(false)
                    setneeddesignChecked(true)
                }
            }
        }
    }

    function configurationSelect(event) {
        setconfigurationChoice(event)

        if (event === "") {
            setonlycodeChecked(false)
            setwithdeployChecked(false)
        } else {
            if (event === "OnlySource") {
                setonlycodeChecked(true)
                setwithdeployChecked(false)
            } else {
                if (event === "WithDeploy") {
                    setonlycodeChecked(false)
                    setwithdeployChecked(true)
                }
            }
        }
    }


    function fromplatformnext() {
        if (platformChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setplatformBlock("none")
            setnumberofviewsBlock("block")
            setdesignBlock("none")
            setconfigurationBlock("none")
            setcontactBlock("none")

            seterrorMessage("")
        }

    }

    function fromNumberOfViewsNPrevious() {
        setplatformBlock("block")
        setnumberofviewsBlock("none")
        setdesignBlock("none")
        setconfigurationBlock("none")
        setcontactBlock("none")

        setnumberofpagesChoice(1)
    }
    function fromNumberOfViewsNext() {
        if (numberofpagesChoice < 1 || numberofpagesChoice > 50) {
            seterrorMessage("Please pick a number from 1 to 50")
        } else {
            setplatformBlock("none")
            setnumberofviewsBlock("none")
            setdesignBlock("block")
            setconfigurationBlock("none")
            setcontactBlock("none")

            seterrorMessage("")
        }

    }

    function fromDesignPrevious() {
        setplatformBlock("none")
        setnumberofviewsBlock("block")
        setdesignBlock("none")
        setconfigurationBlock("none")
        setcontactBlock("none")


        setowdesignChecked(false)
        setneeddesignChecked(false)
        setdesignChoice("")
    }
    function fromDesignNext() {

        if (designChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setplatformBlock("none")
            setnumberofviewsBlock("none")
            setdesignBlock("none")
            setconfigurationBlock("block")
            setcontactBlock("none")

            seterrorMessage("")
        }

    }

    function fromConfigPrevious() {
        setplatformBlock("none")
        setnumberofviewsBlock("none")
        setdesignBlock("block")
        setconfigurationBlock("none")
        setcontactBlock("none")

        setonlycodeChecked(false)
        setwithdeployChecked(false)
        setconfigurationChoice("")
    }
    function fromConfigurationNext() {

        if (configurationChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setplatformBlock("none")
            setnumberofviewsBlock("none")
            setdesignBlock("none")
            setconfigurationBlock("none")
            setcontactBlock("block")

            seterrorMessage("")
        }

    }

    function fromContactPrevious() {
        setplatformBlock("none")
        setnumberofviewsBlock("none")
        setdesignBlock("none")
        setconfigurationBlock("block")
        setcontactBlock("none")

        setEmailAddress("")
        setPhoneNumber("")
        setname("")

        seterrorMessage("")

        setphoneerror("2px solid rgba(0, 128, 0, 0)")
        setemailerror("2px solid rgba(0, 128, 0, 0)")
        setnameerror("2px solid rgba(0, 128, 0, 0)")
    }


    function fromContactSubmit() {

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
                serviceName: "Mobile",
                platformChoice: platformChoice,
                numberofpagesChoice: numberofpagesChoice,
                designChoice: designChoice,
                configurationChoice: configurationChoice,
                name: name.replace(/[^a-zA-Z0-9_-]/g, ' '),
                email: EmailAddress,
                phone: PhoneNumber,
            }

            axios.post("https://appzero0.herokuapp.com/guest/estmob", request).then(
                res => {
                    if (res.data.errors === null || res.data.errors === undefined) {
                        resetForms()
                        setcontactBlock("none")
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
                setcontactBlock("none")
                window.location.reload()
            })
        }
    }



    function changeSize() {
        setoptionsWidth(window.innerWidth * (70 / 100))
        if (window.innerWidth < 960) {
            setprenextfontSize(window.innerWidth * (5 / 100))
            setoptionTextSize(window.innerWidth * (3.5 / 100))
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
            setprenextfontSize({ })
            setoptionTextSize({ })
            setwidth({ })
        }
    }, []);
    window.addEventListener('resize', changeSize)
    return (
        <div>

            <div className="selectService"
                style={{ width: optionsWidth, display: platformBlock }}
            >
                <br />
                Select Platform
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="IOS" name="mobileplatform" className="option" onChange={(event) => { platformSelect(event.target.value) }} checked={iosChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>IOS</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Android" name="mobileplatform" className="option" onChange={(event) => { platformSelect(event.target.value) }} checked={androidChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Android</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div ></div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromplatformnext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: numberofviewsBlock }}
            >
                <br />
                Number Of Views
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <label className="formLabel" style={{ fontSize: optionTextSize }}>Set a number</label>
                        <input type="number" min="1" max="50" value={numberofpagesChoice} className="numberofpages" onChange={(event) => { event.preventDefault(); setnumberofpagesChoice(event.target.value) }} style={{ width: optionTextSize + 25, height: optionTextSize, fontSize: optionTextSize }} />
                    </li>

                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromNumberOfViewsNPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromNumberOfViewsNext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: designBlock }}
            >
                <br />
                Application Design
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="OwnDesign" name="mobileDesign" className="option" onChange={(event) => { designSelection(event.target.value) }} checked={owdesignChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>I have a Design</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="NeedDesign" name="mobileDesign" className="option" onChange={(event) => { designSelection(event.target.value) }} checked={needdesignChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>I need a Design</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromDesignPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromDesignNext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: configurationBlock }}
            >
                <br />
                Configuration
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="OnlySource" name="mobileconfiguration" className="option" onChange={(event) => { configurationSelect(event.target.value) }} checked={onlycodeChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Only Source Code</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="WithDeploy" name="mobileconfiguration" className="option" onChange={(event) => { configurationSelect(event.target.value) }} checked={withdeployChecked} /><label className="formLabel" style={{ fontSize: optionTextSize }}>With Deployment</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromConfigPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromConfigurationNext() }}>Next</div>
                </div>
            </div>

            <div className="selectService"
                style={{ width: optionsWidth, display: contactBlock }}
            >
                <br />
                Contact Information
                <br />
                <input className="ServiceinputField" placeholder="Name" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Phone: 555-555-5555" type="tel" value={PhoneNumber} onChange={(event) => { event.preventDefault(); setPhoneNumber(event.target.value) }} style={{ border: phoneerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Email" type="email" value={EmailAddress} onChange={(event) => { event.preventDefault(); setEmailAddress(event.target.value) }} style={{ border: emailerror, width: width }}></input><br />
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromContactPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromContactSubmit() }}>Submit</div>
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
