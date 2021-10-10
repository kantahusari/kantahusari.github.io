/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import moment from "moment"
import "./View.css"

export default function View() {
    const history = useHistory()
    const cookie = new Cookies()
    const all = cookie.getAll()


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

    const priority = [
        "Important",
        "Normal",
    ]

    const status = [
        "Pending",
        "Complete",
    ]

    const [pagereloader, setpagereloader] = useState(false)
    const [changeStatus, setchangeStatus] = useState(false)
    const [flush, setflush] = useState("")


    function close() {
        localStorage.clear()
        history.push("/Calendar")
    }

    function show() {
        const eventToView = JSON.parse(localStorage.getItem('EventToView'))
        return (
            <div className="daybody dayview">

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
                    <h1>{`${months[eventToView.month]}`}</h1>
                    <h1>{`${eventToView.day},`}</h1>
                    <h1>{`${eventToView.year}`}</h1>
                </div>

                <div className="EventShowArea">

                    <fieldset className="fieldSet">
                        <legend className="legend">Topic</legend>
                        <h3 className="Text">
                            {eventToView.topic}
                        </h3>
                    </fieldset>

                    <fieldset className="fieldSet">
                        <legend className="legend">Time</legend>
                        <div className="label1">
                            <label className="timeLabel">From:</label><h1 className="LabelText">{`${eventToView.fromhour}:${eventToView.fromminute}`}</h1>
                        </div>
                        <div className="label2">
                            <label className="timeLabel">To:</label><h1 className="LabelText">{`${eventToView.tohour}:${eventToView.tominute}`}</h1>
                        </div>
                    </fieldset>

                    <fieldset className="fieldSet">
                        <legend className="legend">Notes</legend>
                        <h3 className="Text">
                            {eventToView.notes}
                        </h3>
                    </fieldset>

                    <fieldset className="fieldSet">
                        <legend className="legend">Description</legend>
                        <h3 className="Text">
                            {eventToView.description}
                        </h3>
                    </fieldset>

                    <fieldset className="fieldSet">
                        <legend className="legend">Priority</legend>
                        <h3 className="Text">
                            {priority[eventToView.priority]}
                        </h3>
                    </fieldset>

                    <fieldset className="fieldSet">
                        <legend className="legend">Status</legend>
                        <h3 className="Text">
                            {status[eventToView.status]}
                        </h3>
                    </fieldset>

                </div>
                
            </div>
        )
    }

    function hide() {
        return (<div>Acces Forbidden</div>)
    }

    function checkStatus() {
        setTimeout(() => {
            setchangeStatus(!changeStatus)
        }, 500);
        if (all.hasOwnProperty("admin")) {
            setpagereloader(true);
        } else {
            setpagereloader(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            checkStatus();
        }, 500);
        return () => {
            setflush({})
        };
    }, [changeStatus]);

    switch (pagereloader) {
        case true:
            return <div>{show()}</div>;
            break;
        case false:
            return <div>{hide()}</div>;
            break;
        default:
            return null;
    }
}
