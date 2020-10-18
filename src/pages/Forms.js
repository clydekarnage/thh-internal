import React from 'react'
import * as CgIcons from "react-icons/cg"
import * as AiIcons from "react-icons/ai"

function Forms() {
    return (
        <div className="forms">
            <div className="header">
                FORMS
            </div>
            <div className="content-form">
                <a href="https://thh-form-cf94e.web.app/hiring" target="_blank" className="form-hiring">
                    <CgIcons.CgGames /> 
                    <h1>HIRING</h1>
                </a>
                <a href="https://thh-form-cf94e.web.app/register" target="_blank" className="form-hiring">
                    <AiIcons.AiOutlineMobile />
                    <h1>CLIENT REGISTER</h1>
                </a>
            </div>
        </div>
    )
}

export default Forms