import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Logo from '../img/logo.png'

function Navbar({ handleLogout }) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#93D500' }}>
            <div className="navbar">
            <Link to="/" className="navbar">
                <img src={Logo} alt="logo" />
            </Link> 
                <Link to="#" className="menu-bars" >
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>  
            </div> 
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                    </li>
                    <li className='navbar-hello'>
                        <h1>Hello</h1>
                    </li>
                    {/* <li className='navbar-name'>
                        <h1>Johndoe123</h1>
                    </li> */}
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
           </IconContext.Provider>
        </>
    )
}

export default Navbar
