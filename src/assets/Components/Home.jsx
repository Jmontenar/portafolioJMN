import React from 'react'
import './Styles/Home.css'
import  Picture from'../img/JM.png'

const Home = () => {
  return (
    <div className='presentation'>
      <div className="big_containgerimg">
      <div className="img_container">
        <img src={Picture} alt="Picture" />
      </div>
      </div>
      <div className="presentation__Hi">
          <h1>Jorge Monterrosa Narváez</h1>
      </div>
      <div className="presentation_profesion">
    <h3>Full stack Developer</h3>
  </div>
    </div>
  )
}

export default Home