import React from 'react'
import Logo from '../img/LOGO_JORGE.png'
import './Styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading_container'>
        <div className="loading_logo">
        <img src={Logo} alt="Logo" />
        </div>
        <h1>Loading Portafolio...</h1>
    </div>
  )
}

export default Loading