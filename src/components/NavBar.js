import React from 'react'
import RGLogoT from './assets/RGLogoT.png'
import CustomBtn from './CustomBtn'
import '../index.css'

function NavBar() {
  return (
    <div className="bar">
      <img src={RGLogoT} alt="Rocking G Logo" className='logo'/>
      <h3 className={`navItem navText`}>Menu</h3>
      <CustomBtn txt="Call Us!" className="navItem"/>
    </div>
  )
}

export default NavBar