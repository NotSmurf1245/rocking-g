import React from 'react'
import RGLogoT from './assets/RGLogoT.png'
import CustomBtn from './CustomBtn'
import '../index.css'
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navWrap">
      <div className="bar">
        <img src={RGLogoT} alt="Rocking G Logo" className='logo'/>
        <Link to="/" className={`navItem navText`}>Home</Link>
        <Link to="/events" className='navText'>Events</Link>
        <Link to="/menu" className='navText'>Menu</Link>
        <CustomBtn txt="Call Us!" className="navItem"/>
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar