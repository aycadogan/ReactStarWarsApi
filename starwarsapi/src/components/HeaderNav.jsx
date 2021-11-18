import React from 'react'
import logo from '../img/sw.png'
import '../App.css'

const HeaderNav = () => {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className="brand-logo"/>
            <h1>PEOPLE</h1>
        </div>
    )
}

export default HeaderNav
