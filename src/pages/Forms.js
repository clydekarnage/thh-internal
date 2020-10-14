import React from 'react'
import { Link } from 'react-router-dom'
import * as CgIcons from "react-icons/cg"
import * as AiIcons from "react-icons/ai"

function Forms() {
    return (
        <div className="forms">
            <div className="header">
                FORMS
            </div>
            <div className="content-form">
                <Link to="/forms" className="form-hiring">
                    <CgIcons.CgGames /> 
                    <h1>HIRING</h1>
                </Link>
                <Link to="/touch" className="form-register">
                    <AiIcons.AiOutlineMobile />
                    <h1>CLIENT REGISTER</h1>
                </Link>
            </div>
        </div>
    )
}

export default Forms