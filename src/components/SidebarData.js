import React from 'react'
import * as CgIcons from "react-icons/cg"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as SiIcons from "react-icons/si"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Forms',
        path: '/forms',
        icon: <FaIcons.FaWpforms />,
        cName: 'nav-text',
    },
    {
        title: 'Touch Games',
        path: '/touch',
        icon: <CgIcons.CgGames />,
        cName: 'nav-text',
    },
    {
        title: 'Motion Games',
        path: '/motion',
        icon: <MdIcons.MdGames />,
        cName: 'nav-text',
    },
    {
        title: 'Virtual Games',
        path: '/virtual',
        icon: <SiIcons.SiRiotgames />,
        cName: 'nav-text',
    },
    {
        title: 'Mobile Apps',
        path: '/mobile',
        icon: <AiIcons.AiOutlineMobile />,
        cName: 'nav-text',
    },
]