/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Calendar.css"
import moment from "moment"


export default function Calendar() {
    const history = useHistory()
    localStorage.clear()
    const cookie = new Cookies()
    const all = cookie.getAll()
    const [pagereloader, setpagereloader] = useState(false)
    const [changeStatus, setchangeStatus] = useState(false)
    const [flush, setflush] = useState("")

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

    /*
    get:

    moment().get('year');
    moment().get('month');
    moment().get('date');
    
    
    */

    /*
    set:
    moment().set('year', 2013);
    moment().set('month', 3);  // April
    moment().set('date', 1);
    
    
    */
    // const time = moment()
    const [time, settime] = useState(moment())
    const [todayInfo, settodayInfo] = useState(`${months[moment().get('month')]}, ${moment().get('date')}`)
    // console.log(time)
    const [currentYear, setcurrentYear] = useState(time.get('year'))
    const [currentMonth, setcurrentMonth] = useState(time.get('month'))
    const [currentDay, setcurrentDay] = useState(time.get('date'))

    const [startOfMonth, setstartOfMonth] = useState(time.startOf('month').get('date'))
    const [endOfMonth, setendOfMonth] = useState(time.endOf('month').get('date'))

    const [firstOfMonthINdex, setfirstOfMonthINdex] = useState(time.startOf('month').weekday())
    const [endOfMonthIndex, setendOfMonthIndex] = useState(time.endOf('month').weekday())
    //console.log("initial:")
    //console.log(currentYear, currentMonth, currentDay, startOfMonth, endOfMonth, firstOfMonthINdex, endOfMonthIndex)//before changes

    function changedate(a) {
        function setNewDate() {
            settime(time.add(a, 'months'))
        }
        var p1 = new Promise((resolve, reject) => {
            resolve(setNewDate());
        });
        p1.then(
            setcurrentYear(time.get('year')),
            setcurrentMonth(time.get('month')),
            setcurrentDay(time.get('date')),
            setstartOfMonth(time.startOf('month').get('date')),
            setendOfMonth(time.endOf('month').get('date')),

            setfirstOfMonthINdex(time.startOf('month').weekday()),
            setendOfMonthIndex(time.endOf('month').weekday())
        )
    }

    function onDayClick(day) {
        const dayinfo = {
            "day": day,
            "month": currentMonth,
            "year": currentYear
        }
        // localStorage.setItem('day', JSON.stringify(dayinfo));
        localStorage.setItem('day', dayinfo.day);
        localStorage.setItem('month', dayinfo.month);
        localStorage.setItem('year', dayinfo.year);
        history.push("/Calendar/Day")
    }
    function renderdaysofthemonth() {
        let days = []
        let num = 0
        for (let i = 0; i < 6; i++) {
            let week = []
            if (i === 0) {
                for (let j = 0; j < 7; j++) {
                    if (j < firstOfMonthINdex) {
                        week.push("")
                    } else {
                        num++

                        week.push(num)
                    }
                }
            } else {
                for (let j = 0; j < 7; j++) {
                    if (num >= endOfMonth) {
                        week.push("")
                    } else {
                        num++
                        week.push(num)
                    }
                }
            }
            days.push(week)
        }
        function changevalue(value, index) {
            if (value === "") {
                return <td
                    key={index}
                    style={{
                        backgroundColor: "#494b66"
                    }}
                >
                    {value}</td>
            } else {
                if (value === moment().get('date')) {
                    return <td
                        style={{
                            backgroundColor: "#075de8",
                            color: "white",
                            cursor: "pointer",
                            border: "1px solid black",
                        }}
                        key={index}
                        onClick={() => {
                            onDayClick(value)
                        }}>{value}</td>
                } else {
                    return <td
                        style={{
                            cursor: "pointer",
                            border: "1px solid black",
                        }}
                        key={index}
                        onClick={() => {
                            onDayClick(value)
                        }}>{value}</td>
                }
            }
        }
        var finalDays = days.map(subarray => subarray.map(changevalue))
        return finalDays

    }

    function logout() {
        cookie.remove("admin")
        history.push("/")
    }

    function show() {
        return (
            <div className="allpage">
                <div className="logbar" >
                    <div className="logout"
                        onClick={
                            () => {
                                logout()
                            }
                        }
                    ><h1>Logout</h1></div>
                </div>
                <div className="calendarBody">
                    <div className="navigation">
                        <div className="navigationButton"
                            onClick={
                                () => {
                                    changedate(-1)
                                }
                            }>{`<`}</div>
                        <p className="navigationDisplay">{`${months[currentMonth]}, ${currentYear}`}<br />{todayInfo}</p>
                        <div className="navigationButton"
                            onClick={
                                () => {
                                    changedate(1)
                                }
                            }>{`>`}</div>
                    </div>

                    <table className="calendarTable">
                        <tbody className="calendarTablebody">

                            <tr className="calendarTableHead">
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>

                            {/*--------ADD DAYS HERE--------*/}
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[0]
                                }
                            </tr>
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[1]
                                }
                            </tr>
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[2]
                                }
                            </tr>
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[3]
                                }
                            </tr>
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[4]
                                }
                            </tr>
                            <tr className="calendarTableData">
                                {
                                    renderdaysofthemonth()[5]
                                }
                            </tr>


                        </tbody>

                    </table>
                </div>
                {/* <AddEvent /> */}


            </div>
        )
    }

    function hide() {
        return (<div>Acces Forbidden</div>)
    }

    function checkStatus() {
        setTimeout(() => {
            setchangeStatus(!changeStatus)
        }, 650);
        if (all.hasOwnProperty("admin")) {
            setpagereloader(true);
        } else {
            setpagereloader(false);

        }
    }
    useEffect(() => {
        setTimeout(() => {
            checkStatus();
        }, 650);
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
