import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../sw.png'
import '../App.css'

const HeaderNav = () => {

    const centerBtnObjects = [
        {
            title:"People",
            url:"/"
        },
        {
            title:"Planets",
            url:"/planets"
        },
        {
            title:"Vehicles",
            url:"/vehicles"
        },
        {
            title:"Starships",
            url:"/starships"
        }
    ];

    const CenterNav = () => {
        return centerBtnObjects.map((item, i) => (
            <li key={i} >
                <NavLink to={item.url} >
                    {item.title}
                </NavLink>
            </li>
        ))
    }

    return (
        <div className="nav">
            <div className="navLogo">
                <img src={logo} alt="logo" className="brand-logo"/>
            </div>
            
            <div className="navLink">
                <ul>
                    <CenterNav />
                </ul>
            </div>
        </div>
    )
}

export default HeaderNav
