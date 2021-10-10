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
                    <h1>{`${months[eventToView.month]}`}</h1>
                    <h1>{`${eventToView.day},`}</h1>
                    <h1>{`${eventToView.year}`}</h1>
                </div>

                <div className="EventShowArea">

                    <fieldset class="fieldSet">
                        <legend class="legend">Topic</legend>
                        <h3 class="Text">
                            {eventToView.topic}
                        </h3>
                    </fieldset>

                    <fieldset class="fieldSet">
                        <legend class="legend">Time</legend>
                        <div class="label1">
                            <label >From:</label><h1 class="LabelText">{`${eventToView.fromhour}:${eventToView.fromminute}`}</h1>
                        </div>
                        <div class="label2">
                            <label >To:</label><h1 class="LabelText">{`${eventToView.tohour}:${eventToView.tominute}`}</h1>
                        </div>
                    </fieldset>

                    <fieldset class="fieldSet">
                        <legend class="legend">Notes</legend>
                        <h3 class="Text">
                            {eventToView.notes}
                        </h3>
                    </fieldset>

                    <fieldset class="fieldSet">
                        <legend class="legend">Description</legend>
                        <h3 class="Text">
                            {eventToView.description}
                        </h3>
                    </fieldset>

                    <fieldset class="fieldSet">
                        <legend class="legend">Priority</legend>
                        <h3 class="Text">
                            {priority[eventToView.priority]}
                        </h3>
                    </fieldset>

                    <fieldset class="fieldSet">
                        <legend class="legend">Status</legend>
                        <h3 class="Text">
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
