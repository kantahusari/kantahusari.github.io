import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import "./AddEvent.css"
import moment from "moment"
import axios from "axios"

export default function AddEvent() {
    /*

    day
    fromminute
    tohour
    tominute
    notes
    description
    priority
    status
*/
    const [topic, settopic] = useState("")
    const [year, setyear] = useState(localStorage.getItem("year"))
    const [month, setmonth] = useState(localStorage.getItem("month"))
    const [day, setday] = useState(localStorage.getItem("day"))
    const [fromHour, setfromHour] = useState("")
    const [fromMinute, setfromMinute] = useState("")
    const [toHour, settoHour] = useState("")
    const [toMinute, settoMinute] = useState("")
    const [notes, setnotes] = useState("")
    const [description, setdescription] = useState("")
    const [priority, setpriority] = useState("")
    const [status, setstatus] = useState("")

    const [error, seterror] = useState("")

    function renderHours() {
        var hours = []
        var start = 6
        // var key=0
        for (let i = start; i <= 18; i++) {
            hours.push(<option key={i} value={i}>{`${i}`}</option>)
        }
        return hours
    }
    function renderMinutes() {
        var minutes = []
        var start = 0
        // var key=0
        for (let i = start; i < 4; i++) {
            minutes.push(<option key={i} value={start}>{`${start}`}</option>)
            start += 15
        }
        return minutes
    }

    function submitEvent() {

        if (topic === "" || fromHour === "" || fromMinute === "" || toHour === "" || toMinute === "" || notes === "" || description === "" || priority === "" || status === "") {
            seterror("Empty Fields")
        } else {
            if (Number(toHour) < Number(fromHour)) {
                seterror("Can't move backward in time !!!")
            } else {
                if (Number(toHour) === Number(fromHour) && Number(toMinute) <= Number(fromMinute)) {
                    seterror("Time must move forward !!!")
                } else {
                        console.log("correct time")
                        const Dayevent = {
                            topic: topic,
                            year: year,
                            month: month,
                            day: day,
                            fromHour: Number(fromHour),
                            fromMinute: Number(fromMinute),
                            toHour: Number(toHour),
                            toMinute: Number(toMinute),
                            notes: notes,
                            description: description,
                            priority: priority,
                            status: status,
                        }
                        // send the request !!!
                        axios.post("https://appzero0.herokuapp.com/admin/addEvent", Dayevent).then(res => {
                            if (res.data.errors === null || res.data.errors === undefined) {
                                settopic("")
                                setfromHour("")
                                setfromMinute("")
                                settoHour("")
                                settoMinute("")
                                setnotes("")
                                setdescription("")
                                setpriority("")
                                setstatus("")

                                seterror("")
                            }
                        }).catch(err => {
                            settopic("")
                            setfromHour("")
                            setfromMinute("")
                            settoHour("")
                            settoMinute("")
                            setnotes("")
                            setdescription("")
                            setpriority("")
                            setstatus("")

                            seterror("")
                        })
                
                }
            }
        }


    }

    return (
        <div className="addEvent">
            <input className="addEventInput" placeholder="Topic" value={topic} onChange={(event) => { event.preventDefault(); settopic(event.target.value) }}></input><br />
            <br />
            <label className="addEventLabelTimeFrame">From: </label><br />
            <label className="addEventLabel">Hour</label>
            <select className="addEventInputTime" value={fromHour} onChange={(event) => { event.preventDefault(); setfromHour(event.target.value) }}>
                <option value=""></option>
                {
                    renderHours()
                }
            </select>
            <label className="addEventLabel">Minute</label>
            <select className="addEventInputTime" value={fromMinute} onChange={(event) => { event.preventDefault(); setfromMinute(event.target.value) }}>
                <option value=""></option>
                {
                    renderMinutes()
                }
            </select><br />
            <br />
            <br />
            <label className="addEventLabelTimeFrame">To: </label><br />
            <label className="addEventLabel">Hour</label>
            <select className="addEventInputTime" value={toHour} onChange={(event) => { event.preventDefault(); settoHour(event.target.value) }}>
                <option value=""></option>
                {
                    renderHours()
                }
            </select>
            <label className="addEventLabel">Minute</label>
            <select className="addEventInputTime" value={toMinute} onChange={(event) => { event.preventDefault(); settoMinute(event.target.value) }}>
                <option value=""></option>
                {
                    renderMinutes()
                }
            </select><br />

            <textarea className="addEventInputTextArea" placeholder="Notes" value={notes} onChange={(event) => { event.preventDefault(); setnotes(event.target.value) }}></textarea ><br />

            <textarea className="addEventInputTextArea" placeholder="Description" value={description} onChange={(event) => { event.preventDefault(); setdescription(event.target.value) }}></textarea ><br />

            <label className="addEventLabel">Priority: </label>
            <select className="addEventInputTime" value={priority} onChange={(event) => { event.preventDefault(); setpriority(event.target.value) }}>
                <option value=""></option>
                <option value={0}>Important</option>
                <option value={1}>Normal</option>
            </select><br />

            <label className="addEventLabel">Status: </label>
            <select className="addEventInputTime" value={status} onChange={(event) => { event.preventDefault(); setstatus(event.target.value) }}>
                <option value=""></option>
                <option value={0}>Pending</option>
                <option value={1}>Complete</option>
            </select><br />
            <div className="addEventSubmit" onClick={() => { submitEvent() }}>Submit</div>
            <br />
            <br />
            <h1>{error}</h1>
        </div>
    )
}
