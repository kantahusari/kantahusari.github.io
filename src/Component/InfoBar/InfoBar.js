/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
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
import "./InfoBar.css"
import Cookies from 'universal-cookie';
import axios from 'axios'

export default function InfoBar() {
    const cookie = new Cookies()
    const all = cookie.getAll()
    const [pagereloader, setpagereloader] = useState(false)

    const [visitor, setvisitor] = useState("")
    const [changeStatus, setchangeStatus] = useState(false)

    async function setAllow() {
        const res = await axios.get('https://geolocation-db.com/json/').then(
            res => {
                const visitorInfo = {
                    ip: res.data.IPv4,
                    country: res.data.country_name,
                    latitude: res.data.latitude,
                    longitude: res.data.longitude,
                }
                setvisitor(visitorInfo)
                //test here


                axios.post('https://appzero0.herokuapp.com/guest/info', visitorInfo)
                    .then(
                        res => {
                            if (res.data.errors === null || res.data.errors === undefined) {
                                const cookieToset = {
                                    country: res.data.country,
                                    latitude: res.data.latitude,
                                    longitude: res.data.longitude,
                                }
                                cookie.set("visitor", cookieToset)
                            } else {
                                cookie.set("visitor", 0)
                            }
                        }
                    ).catch(err => {
                        cookie.set("visitor", 0)
                    })
            }
        )
    }

    async function setBlock() {
        await cookie.set("visitor", 0)
    }

    async function allow() {
        await setAllow()
        setchangeStatus(!changeStatus)
    }

    async function block() {
        await setBlock()
        setchangeStatus(!changeStatus)
    }
    function Show() {
        return (
            <div className="cookiesBar" style={{ display: "flex" }}>
                <div className="cookiesBarLeft">This Website uses cookies and location</div>
                <div className="cookiesBarYes" onClick={(event) => { event.preventDefault(); allow() }}>Allow</div>
                <div className="cookiesBarNo" onClick={(event) => { event.preventDefault(); block() }}>Block</div>
            </div>
        )
    }
    function Hide() {
        return (
            <div></div>
        )
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setpagereloader(!pagereloader)
        }, 650);
        return () => {
            clearTimeout(timer);
            setchangeStatus({})
        }
    }, [pagereloader]);

    switch (all.hasOwnProperty("visitor")) {
        case true:
            return <div>{Hide()}</div>;
            break;
        case false:
            return <div>{Show()}</div>;
            break;
        default:
            return null;
    }
}
