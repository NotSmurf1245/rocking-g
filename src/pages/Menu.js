import React from 'react'
import Menu1 from '../components/assets/Menus/Burgers-Number.jpeg'
import Menu2 from '../components/assets/Menus/Tacos-Drinks.jpeg'

function Menu() {
  return (
    <div className="menuContainer">
        <img alt="Menu" className="menu" src={Menu1} />
        <img alt="Menu" className="menu" src={Menu2} />
    </div>
  )
}

export default Menu