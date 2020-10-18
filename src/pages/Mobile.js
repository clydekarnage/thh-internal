import React from 'react'
import * as CgIcons from "react-icons/cg"
import * as AiIcons from "react-icons/ai"

function Mobile() {
    return (
        <div className="mobile">
            <div className="header">
                <span>MOBILE</span>APPS
            </div>
            <div className="content-mobile">
                <a href="/thhapps" className="form-hiring">
                    <CgIcons.CgGames /> 
                    <h1>THH APPS</h1>
                </a>
                {/* <a href="https://thh-form-cf94e.web.app/register" className="form-hiring">
                    <AiIcons.AiOutlineMobile />
                    <h1>CLIENT REGISTER</h1>
                </a> */}
            </div>
        </div>
    )
}

export default Mobile