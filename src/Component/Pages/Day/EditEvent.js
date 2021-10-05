import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import moment from "moment"
import axios from "axios"
import "./EditEvent.css"





export default function EditEvent() {
    const history = useHistory()

    const itemToChange = JSON.parse(localStorage.getItem('EventToEdit'))

    const [_id, set_id] = useState(itemToChange._id)
    const [topic, settopic] = useState(itemToChange.topic)
    const [year, setyear] = useState(itemToChange.year)
    const [month, setmonth] = useState(itemToChange.month)
    const [day, setday] = useState(itemToChange.day)
    const [fromHour, setfromHour] = useState(itemToChange.fromhour)
    const [fromMinute, setfromMinute] = useState(itemToChange.fromminute)
    const [toHour, settoHour] = useState(itemToChange.tohour)
    const [toMinute, settoMinute] = useState(itemToChange.tominute)
    const [notes, setnotes] = useState(itemToChange.notes)
    const [description, setdescription] = useState(itemToChange.description)
    const [priority, setpriority] = useState(itemToChange.priority)
    const [status, setstatus] = useState(itemToChange.status)

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
                    const Dayevent = {
                        _id: _id,
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

                    axios.post("https://appzero0.herokuapp.com/admin/editEvent", Dayevent).then(res => {
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
                            localStorage.clear()
                            history.push(res.data)
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
            <div className="addEventSubmit" onClick={() => { submitEvent() }}>Update</div>
            <br />
            <br />
            <h1>{error}</h1>
        </div>
    )
}
