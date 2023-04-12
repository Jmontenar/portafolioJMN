import React, { useRef } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from './img/LOGO_JORGE.png'


const Header = () => {
    const navbar = useRef()
    const handleHamClick = () => {
    navbar.current.classList.toggle('open')    
    
  }
  return (
<header>
  <div className="navbar">
    <div className="logo">
    <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>  
    </div>
    <ul className="links">
            <li>
          <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/AboutMe">About Me</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/Habilities">Habilities</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/MyProyects">My Projects</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/ContactMe">Contact Me</NavLink>
            </li>
        </ul>
          <NavLink className=' link action_btn' to="/">Descarga mi CV</NavLink>
          <div className="toggle_btn">
          <i onClick={handleHamClick} className="fa-solid fa-bars"></i>      
          </div>
          <div ref={navbar} className="dropdown_menu open">
            <ul>
          <li>
          <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/AboutMe">About Me</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/Habilities">Habilities</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/MyProyects">My Projects</NavLink>
            </li>
            <li>
          <NavLink className="link" to="/ContactMe">Contact Me</NavLink>
            </li>
            <li>
            <NavLink className=' link action_btn' to="/">Descarga mi CV</NavLink>
            </li>
            </ul>
          </div>
  </div>
</header>

        // <label>
        //   <input type="checkbox" />
        //   <span className='check'></span>
        // </label>
      
  )
}

export default Header