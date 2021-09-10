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
import { useHistory } from "react-router-dom"

export default function Database() {
    const history = useHistory()

    const [optionsWidth, setoptionsWidth] = useState(window.innerWidth * (70 / 100))
    const [prenextfontSize, setprenextfontSize] = useState(window.innerWidth * (3 / 100))
    const [optionTextSize, setoptionTextSize] = useState(window.innerWidth * (2 / 100))
    const [width, setwidth] = useState(window.innerWidth * (50 / 100))


    const [name, setname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")

    const [errorMessage, seterrorMessage] = useState("")
    const [SerrorMessage, setSerrorMessage] = useState("")

    const [nameerror, setnameerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [emailerror, setemailerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [PhoneNumbererror, setPhoneNumbererror] = useState("2px solid rgba(0, 128, 0, 0)")




    const [ServiceTypeBlock, setServiceTypeBlock] = useState("block")
    const [TechnologyBlock, setTechnologyBlock] = useState("none")
    const [IntegrationBlock, setIntegrationBlock] = useState("none")
    const [contactInfoblock, setcontactInfoblock] = useState("none")


    const [servicetypeChoice, setservicetypeChoice] = useState("")
    const [technologyChoice, settechnologyChoice] = useState("")
    const [integrationChoice, setintegrationChoice] = useState("")



    const [manageDatabase, setmanageDatabase] = useState(false)
    const [developDatabase, setdevelopDatabase] = useState(false)

    const [SQL, setSQL] = useState(false)
    const [NoSql, setNoSql] = useState(false)

    const [standAlone, setstandAlone] = useState(false)
    const [withIntegration, setwithIntegration] = useState(false)



    function selectServiceType(event) {
        setservicetypeChoice(event)
        if (event === "") {
            setmanageDatabase(false)
            setdevelopDatabase(false)
        } else {
            if (event === "Manage") {
                setmanageDatabase(true)
                setdevelopDatabase(false)
            } else {
                if (event === "Develop") {
                    setmanageDatabase(false)
                    setdevelopDatabase(true)
                }
            }
        }
    }

    function selectTechnology(event) {
        settechnologyChoice(event)
        if (event === "") {
            setSQL(false)
            setNoSql(false)
        } else {
            if (event === "SQL") {
                setSQL(true)
                setNoSql(false)
            } else {
                if (event === "NoSQL") {
                    setSQL(false)
                    setNoSql(true)
                }
            }
        }
    }

    function selectIntegration(event) {
        setintegrationChoice(event)
        if (event === "") {
            setstandAlone(false)
            setwithIntegration(false)
        } else {
            if (event === "StandAlone") {
                setstandAlone(true)
                setwithIntegration(false)
            } else {
                if (event === "Integration") {
                    setstandAlone(false)
                    setwithIntegration(true)
                }
            }
        }
    }

    function resetForms() {

        setservicetypeChoice("")
        settechnologyChoice("")
        setintegrationChoice("")


        setPhoneNumber("")
        setEmailAddress("")
        setname("")

        setSerrorMessage("")


        setnameerror("2px solid rgba(0, 128, 0, 0)")
        setemailerror("2px solid rgba(0, 128, 0, 0)")
        setPhoneNumbererror("2px solid rgba(0, 128, 0, 0)")
    }

    //navigation

    function fromServiceNext() {
        if (servicetypeChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setServiceTypeBlock("none")
            setTechnologyBlock("block")
            setIntegrationBlock("none")
            setcontactInfoblock("none")
            seterrorMessage("")
        }
    }
    function fromTechPrevious() {
        setServiceTypeBlock("block")
        setTechnologyBlock("none")
        setIntegrationBlock("none")
        setcontactInfoblock("none")

        seterrorMessage("")

        setSQL(false)
        setNoSql(false)
        settechnologyChoice("")
    }

    function fromTechNext() {
        if (technologyChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setServiceTypeBlock("none")
            setTechnologyBlock("none")
            setIntegrationBlock("block")
            setcontactInfoblock("none")

            seterrorMessage("")
        }
    }

    function fromIntegrationPrevious() {
        setServiceTypeBlock("none")
        setTechnologyBlock("block")
        setIntegrationBlock("none")
        setcontactInfoblock("none")

        seterrorMessage("")

        setstandAlone(false)
        setwithIntegration(false)

        setintegrationChoice("")


    }
    function fromtIntegrationNext() {
        if (integrationChoice === "") {
            seterrorMessage("Please Select an Option")
        } else {
            setServiceTypeBlock("none")
            setTechnologyBlock("none")
            setIntegrationBlock("none")
            setcontactInfoblock("block")
            seterrorMessage("")
        }
    }

    function fromContactPrevious() {
        setServiceTypeBlock("none")
        setTechnologyBlock("none")
        setIntegrationBlock("block")
        setcontactInfoblock("none")

        setEmailAddress("")
        setPhoneNumber("")
        setname("")

        seterrorMessage("")

        setPhoneNumbererror("2px solid rgba(0, 128, 0, 0)")
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
            setPhoneNumbererror("2px solid red")
        } else {
            setPhoneNumbererror("2px solid rgba(0, 128, 0, 0)")
        }

        if (name !== "" && EmailAddress !== "" && PhoneNumber !== "") {
            const request = {
                serviceName: "Database",
                servicetypeChoice: servicetypeChoice,
                technologyChoice: technologyChoice,
                integrationChoice: integrationChoice,
                name: name.replace(/[^a-zA-Z0-9_-]/g, ' '),
                email: EmailAddress,
                phone: PhoneNumber,

            }

            axios.post("https://appzero0.herokuapp.com/guest/estdatabase", request).then(
                res => {
                    if (res.data.errors === null || res.data.errors === undefined) {
                        resetForms()
                        setcontactInfoblock("none")
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
                resetForms()
                setcontactInfoblock("none")
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
                style={{ width: optionsWidth, display: ServiceTypeBlock }}
            >
                <br />
                Service Type
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="Manage" name="serviceType" className="option" onChange={(event) => { selectServiceType(event.target.value) }} checked={manageDatabase} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Manage Database</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Develop" name="serviceType" className="option" onChange={(event) => { selectServiceType(event.target.value) }} checked={developDatabase} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Develop Database</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div></div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromServiceNext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: TechnologyBlock }}
            >
                <br />
                Technology
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="SQL" name="Technology" className="option" onChange={(event) => { selectTechnology(event.target.value) }} checked={SQL} /><label className="formLabel" style={{ fontSize: optionTextSize }}>SQL</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="NoSQL" name="Technology" className="option" onChange={(event) => { selectTechnology(event.target.value) }} checked={NoSql} /><label className="formLabel" style={{ fontSize: optionTextSize }}>No SQL</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromTechPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromTechNext() }}>Next</div>
                </div>
            </div>


            <div className="selectService"
                style={{ width: optionsWidth, display: IntegrationBlock }}
            >
                <br />
                Integration
                <br />
                <ul className="optionstable">
                    <li className="optionstablerow">
                        <input type="radio" value="StandAlone" name="Integration" className="option" onChange={(event) => { selectIntegration(event.target.value) }} checked={standAlone} /><label className="formLabel" style={{ fontSize: optionTextSize }}>Stand Alone</label>
                    </li>
                    <li className="optionstablerow">
                        <input type="radio" value="Integration" name="Integration" className="option" onChange={(event) => { selectIntegration(event.target.value) }} checked={withIntegration} /><label className="formLabel" style={{ fontSize: optionTextSize }}>With Software Integration</label>
                    </li>
                </ul>
                <div className="suboptioncontrol" >
                    <div className="previous" style={{ fontSize: prenextfontSize }} onClick={() => { fromIntegrationPrevious() }}>Previous</div>
                    <div className="next" style={{ fontSize: prenextfontSize }} onClick={() => { fromtIntegrationNext() }}>Next</div>
                </div>
            </div>



            <div className="selectService"
                style={{ width: optionsWidth, display: contactInfoblock }}
            >
                <br />
                Contact Information
                <br />

                <input className="ServiceinputField" placeholder="Name" type="text" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror, width: width }}></input><br />
                <input className="ServiceinputField" placeholder="Phone: 555-555-5555" type="tel" value={PhoneNumber} onChange={(event) => { event.preventDefault(); setPhoneNumber(event.target.value) }} style={{ border: PhoneNumbererror, width: width }}></input><br />
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
