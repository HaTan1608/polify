import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [open,setOpen]=useState(false);
    return (
        <>
              <header>
      <div className="menu-btn" onClick={()=>setOpen(!open)}>
        <span className={open? "menu-btn__burger open":"menu-btn__burger"}></span>
      </div>
      <nav className={open? "nav open":"nav"}>
        <ul className={open? "menu-nav open":"menu-nav"}>
          <li className={open? "menu-nav__item open":"menu-nav__item"}>
            <div className="menu-nav__link"><Link to='/'>Home</Link></div>
          </li>
          <li className={open? "menu-nav__item open":"menu-nav__item"}>
          <div className="menu-nav__link"><Link to='/about'>About me</Link></div>
          </li>
          <li className={open? "menu-nav__item open":"menu-nav__item"}>
          <div className="menu-nav__link"><Link to='/projects'>Projects</Link></div>
          </li>
          <li className={open? "menu-nav__item open":"menu-nav__item"}>
            <div className="menu-nav__link"><Link to='/contact'>Contact</Link></div>
          </li>
        </ul>
      </nav>
    </header>
        </>
    )
}

export default Header
