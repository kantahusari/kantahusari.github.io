/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import moment from "moment"
import "./Edit.css"
import EditEvent from "./EditEvent"

export default function Edit() {
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

    const [pagereloader, setpagereloader] = useState(false)
    const [changeStatus, setchangeStatus] = useState(false)
    const [flush, setflush] = useState("")


    function close() {
        localStorage.clear()
        history.push("/Calendar")
    }



    function show() {
        const eventToEdit=JSON.parse(localStorage.getItem('EventToEdit'))
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
                    <h1>{`${months[eventToEdit.month]}`}</h1>
                    <h1>{`${eventToEdit.day},`}</h1>
                    <h1>{`${eventToEdit.year}`}</h1>
                </div>

                <EditEvent />

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

