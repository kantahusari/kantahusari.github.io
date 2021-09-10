/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import "./Skills.css"

import design from "../../Resources/Design.png"
import coding from "../../Resources/Data.png"
import frameworks from "../../Resources/Framework.png"
import databases from "../../Resources/Server.png"
import devops from "../../Resources/DevOps.png"

export default function Skills() {

    const skills = {
        html: {
            name: "HTML",
            percentage: "90%",
        },
        css: {
            name: "CSS",
            percentage: "70%",
        },
        sass: {
            name: "Sass",
            percentage: "50%",
        },
        Bootstrap: {
            name: "Bootstrap",
            percentage: "90%",
        },
        Photoshop: {
            name: "Photoshop",
            percentage: "90%",
        },
        JavaScript: {
            name: "JavaScript",
            percentage: "75%",
        },
        PHP: {
            name: "PHP",
            percentage: "60%",
        },
        Python: {
            name: "Python",
            percentage: "70%",
        },
        CS: {
            name: "C#",
            percentage: "50%",
        },
        Java: {
            name: "Java",
            percentage: "50%",
        },
        Swift: {
            name: "Swift",
            percentage: "50%",
        },
        MySQL: {
            name: "MySQL",
            percentage: "80%",
        },
        PostgreSQL: {
            name: "PostgreSQL",
            percentage: "50%",
        },
        SQLServer: {
            name: "SQL Server",
            percentage: "45%",
        },
        SQLite: {
            name: "SQLite",
            percentage: "70%",
        },
        MongoDB: {
            name: "MongoDB",
            percentage: "70%",
        },
        GraphQL: {
            name: "GraphQL",
            percentage: "60%",
        },
        NodeJS: {
            name: "Node.JS",
            percentage: "70%",
        },
        Express: {
            name: "Express",
            percentage: "60%",
        },
        Mern: {
            name: "MERN",
            percentage: "75%",
        },
        Mean: {
            name: "MEAN",
            percentage: "60%",
        },
        React_Native: {
            name: "React Native",
            percentage: "70%",
        },
        Ionic: {
            name: "Ionic",
            percentage: "65%",
        },
        Django: {
            name: "Django",
            percentage: "45%",
        },
        Tkinter: {
            name: "Tkinter",
            percentage: "45%",
        },
        GitHub: {
            name: "GitHub",
            percentage: "60%",
        },
        Docker: {
            name: "Docker",
            percentage: "50%",
        },
        TravisCI: {
            name: "TravisCI",
            percentage: "60%",
        },
        AWS: {
            name: "AWS",
            percentage: "45%",
        },
        DigitalOcean: {
            name: "DigitalOcean",
            percentage: "45%",
        },
    }

    const [title, settitle] = useState("Skills")
    //click status
    const [shhdesign, setshhdesign] = useState(false)
    const [shhcoding, setshhcoding] = useState(false)
    const [shhframeworks, setshhframeworks] = useState(false)
    const [shhdatabases, setshhdatabases] = useState(false)
    const [shhdevops, setshhdevops] = useState(false)

    //show rooms
    const [designshowroom, setdesignshowroom] = useState("none")
    const [codingshowroom, setcodingshowroom] = useState("none")
    const [frameworksshowroom, setframeworksshowroom] = useState("none")
    const [databasesshowroom, setdatabasesshowroom] = useState("none")
    const [devopsshowroom, setdevopsshowroom] = useState("none")


    //animation state
    const [animation, setanimation] = useState("fade_out_show 1s")


    const [width, setwidth] = useState(window.innerWidth * (10 / 100))
    const [barwidth, setbarwidth] = useState(window.innerWidth * (30 / 100))


    const [containerHeight, setcontainerHeight] = useState("fit-content")


    // show hide functions
    function showDesign() {
        setshhdesign(!shhdesign)
        //set all other false
        setshhcoding(false)
        setshhframeworks(false)
        setshhdatabases(false)
        setshhdevops(false)
        if (shhdesign) {
            setanimation("fade_in_show 1s")
            settitle("Skills")
            setTimeout(() => {
                setdesignshowroom("none")
                setcodingshowroom("none")
                setframeworksshowroom("none")
                setdatabasesshowroom("none")
                setdevopsshowroom("none")
            }, 950);
        } else {
            setanimation("fade_out_show 1s")
            settitle("Design")
            setdesignshowroom("block")
            setcodingshowroom("none")
            setframeworksshowroom("none")
            setdatabasesshowroom("none")
            setdevopsshowroom("none")

        }
    }

    function showCoding() {
        setshhcoding(!shhcoding)
        setshhdesign(false)
        setshhframeworks(false)
        setshhdatabases(false)
        setshhdevops(false)

        if (shhcoding) {
            setanimation("fade_in_show 1s")
            settitle("Skills")
            setTimeout(() => {

                setdesignshowroom("none")
                setcodingshowroom("none")
                setframeworksshowroom("none")
                setdatabasesshowroom("none")
                setdevopsshowroom("none")
            }, 950);

        } else {
            setanimation("fade_out_show 1s")
            settitle("Coding")
            setdesignshowroom("none")
            setcodingshowroom("block")
            setframeworksshowroom("none")
            setdatabasesshowroom("none")
            setdevopsshowroom("none")

        }
    }

    function showFramework() {
        setshhframeworks(!shhframeworks)

        setshhcoding(false)
        setshhdesign(false)
        setshhdatabases(false)
        setshhdevops(false)
        if (shhframeworks) {
            setanimation("fade_in_show 1s")
            settitle("Skills")
            setTimeout(() => {

                setdesignshowroom("none")
                setcodingshowroom("none")
                setframeworksshowroom("none")
                setdatabasesshowroom("none")
                setdevopsshowroom("none")
            }, 950);

        } else {
            setanimation("fade_out_show 1s")
            settitle("Frameworks")
            setdesignshowroom("none")
            setcodingshowroom("none")
            setframeworksshowroom("block")
            setdatabasesshowroom("none")
            setdevopsshowroom("none")

        }
    }

    function showDataBases() {
        setshhdatabases(!shhdatabases)

        setshhcoding(false)
        setshhdesign(false)
        setshhframeworks(false)
        setshhdevops(false)


        if (shhdatabases) {
            setanimation("fade_in_show 1s")
            settitle("Skills")
            setTimeout(() => {

                setdesignshowroom("none")
                setcodingshowroom("none")
                setframeworksshowroom("none")
                setdatabasesshowroom("none")
                setdevopsshowroom("none")
            }, 950);

        } else {
            setanimation("fade_out_show 1s")
            settitle("Databases")
            setdesignshowroom("none")
            setcodingshowroom("none")
            setframeworksshowroom("none")
            setdatabasesshowroom("block")
            setdevopsshowroom("none")

        }
    }

    function showDevOps() {
        setshhdevops(!shhdevops)
        setshhcoding(false)
        setshhdesign(false)
        setshhframeworks(false)
        setshhdatabases(false)
        if (shhdevops) {
            setanimation("fade_in_show 1s")
            settitle("Skills")
            setTimeout(() => {

                setdesignshowroom("none")
                setcodingshowroom("none")
                setframeworksshowroom("none")
                setdatabasesshowroom("none")
                setdevopsshowroom("none")
            }, 950);

        } else {
            setanimation("fade_out_show 1s")
            settitle("DevOps")
            setdesignshowroom("none")
            setcodingshowroom("none")
            setframeworksshowroom("none")
            setdatabasesshowroom("none")
            setdevopsshowroom("block")

        }
    }




    function changeDimention() {
        setwidth(window.innerWidth * (7 / 100))
        setbarwidth(window.innerWidth * (30 / 100))
    }
    useEffect(() => {
        changeDimention();
        return () => {
            setwidth({});
            setbarwidth({}); 
          }
    },[]);
    window.addEventListener('resize', changeDimention)

    return (
        <div className="container" style={{ height: containerHeight }}>
            <div className="Skills">
                <h1>{title}</h1>
            </div>

            <table style={{ marginTop: "20px", backgroundColor: "#ffffff00" }}>
                <tbody>
                    <tr>
                        <th>
                            <div className="catimage" style={{ width: width, height: width }}><img className="caticon" src={design} style={{ width: width, height: width }} onClick={() => { showDesign() }}></img></div>
                        </th>
                        <th>
                            <div className="catimage" style={{ width: width, height: width }}><img className="caticon" src={coding} style={{ width: width, height: width }} onClick={() => { showCoding() }}></img></div>
                        </th>
                        <th>
                            <div className="catimage" style={{ width: width, height: width }}><img className="caticon" src={frameworks} style={{ width: width, height: width }} onClick={() => { showFramework() }}></img></div>
                        </th>
                        <th>
                            <div className="catimage" style={{ width: width, height: width }}><img className="caticon" src={databases} style={{ width: width, height: width }} onClick={() => { showDataBases() }}></img></div>
                        </th>
                        <th>
                            <div className="catimage" style={{ width: width, height: width }}><img className="caticon" src={devops} style={{ width: width, height: width }} onClick={() => { showDevOps() }}></img></div>
                        </th>
                    </tr>
                </tbody>
            </table>


            {/* design */}
            <div className="showRoom" style={{ display: designshowroom, animation: animation }}>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.html.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.html.percentage}` }}>{`${skills.html.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.css.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.css.percentage}` }}>{`${skills.css.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Photoshop.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Photoshop.percentage}` }}>{`${skills.Photoshop.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.sass.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.sass.percentage}` }}>{`${skills.sass.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Bootstrap.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Bootstrap.percentage}` }}>{`${skills.Bootstrap.percentage}`}</div>
                    </div> */}
                </div>


            </div>

            {/* coding */}
            <div className="showRoom" style={{ display: codingshowroom, animation: animation }}>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.JavaScript.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.JavaScript.percentage}` }}>{`${skills.JavaScript.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Python.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Python.percentage}` }}>{`${skills.Python.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.PHP.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.PHP.percentage}` }}>{`${skills.PHP.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.CS.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.CS.percentage}` }}>{`${skills.CS.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Java.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Java.percentage}` }}>{`${skills.Java.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Swift.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Swift.percentage}` }}>{`${skills.Java.percentage}`}</div>
                    </div> */}
                </div>
            </div>

            {/* frameworks */}
            <div className="showRoom" style={{ display: frameworksshowroom, animation: animation }}>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.NodeJS.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.NodeJS.percentage}` }}>{`${skills.NodeJS.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Express.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Express.percentage}` }}>{`${skills.Express.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Mern.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Mern.percentage}` }}>{`${skills.Mern.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Mean.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Mean.percentage}` }}>{`${skills.Mean.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.React_Native.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.React_Native.percentage}` }}>{`${skills.Mean.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Ionic.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Ionic.percentage}` }}>{`${skills.Mean.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Django.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Django.percentage}` }}>{`${skills.Django.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Tkinter.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Tkinter.percentage}` }}>{`${skills.Tkinter.percentage}`}</div>
                    </div> */}
                </div>
            </div>

            {/* databases */}
            <div className="showRoom" style={{ display: databasesshowroom, animation: animation }}>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.MySQL.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.MySQL.percentage}` }}>{`${skills.MySQL.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.PostgreSQL.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.PostgreSQL.percentage}` }}>{`${skills.PostgreSQL.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.SQLServer.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.SQLServer.percentage}` }}>{`${skills.SQLServer.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.SQLite.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.SQLite.percentage}` }}>{`${skills.SQLite.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.MongoDB.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.MongoDB.percentage}` }}>{`${skills.MongoDB.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.GraphQL.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.GraphQL.percentage}` }}>{`${skills.GraphQL.percentage}`}</div>
                    </div> */}
                </div>
            </div>

            {/* devops */}
            <div className="showRoom" style={{ display: devopsshowroom, animation: animation }}>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.GitHub.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.GitHub.percentage}` }}>{`${skills.GitHub.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.Docker.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.Docker.percentage}` }}>{`${skills.Docker.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.TravisCI.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.TravisCI.percentage}` }}>{`${skills.TravisCI.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.AWS.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.AWS.percentage}` }}>{`${skills.AWS.percentage}`}</div>
                    </div> */}
                </div>

                <div className="Skillcont">
                    <div className="skillname">{`${skills.DigitalOcean.name}`}</div>
                    {/* <div className="skillouter" style={{ width: barwidth }}>
                        <div className="htmlperfill" style={{ width: `${skills.DigitalOcean.percentage}` }}>{`${skills.DigitalOcean.percentage}`}</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
