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
    localStorage.clear()
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



    // return (

    //     <div className="daybody">

    //         <div className="logbar" >
    //             <div className="logout"
    //                 onClick={
    //                     () => {
    //                         close()
    //                     }
    //                 }
    //             >
    //                 <h1>{`<--`}</h1>
    //             </div>
    //         </div>

    //         <div className="dayinfo">
    //             <h1>{`${months[localStorage.getItem('month')]}`}</h1>
    //             <h1>{`${localStorage.getItem('day')},`}</h1>
    //             <h1>{`${localStorage.getItem('year')}`}</h1>
    //         </div>

    //         <AddEvent />

    //     </div>

    // )

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
