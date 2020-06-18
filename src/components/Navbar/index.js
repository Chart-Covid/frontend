import React from 'react'

import './styles.scss'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__about">
        <h1>
          About
        </h1>
      </div>
    </header>
  )
}

export default Navbar
