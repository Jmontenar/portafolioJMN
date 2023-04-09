import React, { useRef } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from './img/LOGO_JORGE.png'


const Header = () => {
    const navbar = useRef()
    const handleHamClick = () => {
    navbar.current.classList.toggle('header__nav--close')    
    
  }
  return (
<header className="header">
      <NavLink className="header__logo_link"  to="/">
        <div className="header__logo"><img src={Logo} alt="Logo" /></div>
      </NavLink>
        <label>
          <input type="checkbox" />
          <span className='check'></span>
        </label>
      <i onClick={handleHamClick} className="fa-solid fa-bars header__menu-ham"></i>
      <nav ref={navbar} className="header__nav header__nav--close">
      
        <ul className="header__list">
            <li className="header__item">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/">Home</NavLink>
            </li>
            <li className="header__item">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/AboutMe">About Me</NavLink>
            </li>
            <li className="header__item">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/Habilities">Habilities</NavLink>
            </li>
            <li className="nav-menu-item nav-link">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/MyProyects">My Projects</NavLink>
            </li>
            <li className="nav-menu-item nav-link">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/ContactMe">Contact Me</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    // <header className='header'>
    //       <nav ref={navbar} className="nav header__nav--close">
    //         <button className="nav-toogle">
    //         <i onClick={handleHamClick} className="fa-solid fa-bars header__menu-ham"></i>
    //         </button>
    //       <NavLink className= {({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}  to="/">
    //         <img src={Logo} alt="Logo" />
    //       </NavLink>
    //       <ul className="nav-menu nav-menu_visible">
    //       <li className="nav-menu-item nav-link">
    //         <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/">Home</NavLink>
    //       </li>
    //       <li className="nav-menu-item nav-link">
    //         <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/AboutMe">About Me</NavLink>
    //       </li>
    //       <li className="nav-menu-item nav-link">
    //       <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/Habilities">Habilities</NavLink>
    //       </li>
    //       <li className="nav-menu-item nav-link">
    //       <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/MyProyects">My Projects</NavLink>
    //       </li>
    //       <li className="nav-menu-item nav-link">
    //       <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/ContactMe">Contact Me</NavLink>
    //       </li>
    //       </ul>
    //       </nav>
    // </header>
  )
}

export default Header