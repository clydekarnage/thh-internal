import React from 'react'
import { Link } from 'react-router-dom'
import * as CgIcons from "react-icons/cg"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as SiIcons from "react-icons/si"

function Home() {
    return (
        <div className="home">
            <div className="header">
                HOME
            </div>
            <div className="content">
                <Link to="/forms" className="home-form">
                    <FaIcons.FaWpforms />
                    <h1>FORMS</h1>
                </Link>
                <Link to="/touch" className="home-tg">
                    <CgIcons.CgGames />
                    <h1>TOUCH GAMES</h1>
                </Link>
                <Link to="/motion" className="home-mg">
                    <MdIcons.MdGames />
                    <h1>MOTION GAMES</h1>
                </Link>
            </div>
            <div className="content1">
                <Link to="/virtual" className="home-vg">
                    <SiIcons.SiRiotgames />
                    <h1>VIRTUAL GAMES</h1>
                </Link>
                <Link to="/mobile" className="home-ma">
                    <AiIcons.AiOutlineMobile />
                    <h1>MOBILE APPS</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home
