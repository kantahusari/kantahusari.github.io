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

    const [dayDate, setdayDate] = useState([1])

    function close() {
        localStorage.clear()
        history.push("/Calendar")
    }

    function renderTable() {
        var hoursTable = []
        var hour = 6
        var index = 1
        for (let i = 0; i < 12; i++) {
            var min = 0
            for (let j = 0; j < 4; j++) {
                hoursTable.push(<tr key={index}><th>{`${hour}:${min}`}</th></tr>)
                index++
                min += 15
            }
            hour++
        }
        return (
            <table className="daysTableLeftHead">
                <tbody>
                    <tr>
                        <th>
                            {`task -->`}
                        </th>
                    </tr>
                    {hoursTable}
                </tbody>
            </table>
        )
    }


    function DayInformation() {
        if (dayDate.length <= 0) {
            return <>No Info</>
        } else {
            return renderTable()
        }
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
            
            {/* <div className="dayinfoarea">
                {
                    DayInformation()
                }
            </div> */}

        </div>

    )
}
