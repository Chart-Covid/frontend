import React from 'react'

import './styles.scss'
import logo from '../../assets/logo.svg'

const NavbarHome = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img clasName="" src={logo} />
      </div>
      <div className="navbar__about">
        <h1>
          About
        </h1>
      </div>
    </header>
  )
}

export default NavbarHome
