/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Day.css"
import moment from "moment"
import AddEvent from "./AddEvent"

export default function Day() {

    const history = useHistory()
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]



    function close() {
        localStorage.clear()
        history.push("/Calendar")
    }


    return (

        <div className="daybody">

            <div className="logbar" >
                <div className="logout"
                    onClick={
                        () => {
                            close()
                        }
                    }
                >
                    <h1>{`<--`}</h1>
                </div>
            </div>

            <div className="dayinfo">
                <h1>{`${months[localStorage.getItem('month')]}`}</h1>
                <h1>{`${localStorage.getItem('day')},`}</h1>
                <h1>{`${localStorage.getItem('year')}`}</h1>
            </div>

            <AddEvent />

        </div>

    )
}
