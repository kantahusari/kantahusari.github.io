import React from 'react'
import "../Home/Home.css"
import TopNav from "../TopNav/TopNav"
import FooterBar from "../FooterBar/FooterBar"
import Body from "../Body/Body"
import InfoBar from "../InfoBar/InfoBar"

export default function Home() {
    return (
        <div className='home'>
            <InfoBar />
            <TopNav />
            <Body />
            <FooterBar />
        </div>
    )
}
