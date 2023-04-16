import React, { useEffect, useState } from 'react'
import './Styles/Habilities.css'
import CSS from '../img/css.png'
import HTML from '../img/logohtml.png'
import JS from '../img/JS.png' 
import REACT from '../img/react_logo.png'
import NODE from '../img/nodeJS.png' 
import Loading from './Loading'

const Habilities = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])

if(isLoading){
  return <Loading />
  }else{
  return (
    <div className='habilities_container'>
        <div className="skills_title">
          <h1>Habilidades Blandas</h1>
        </div>
      <div className="soft_skills animate sometext">
          <h2> </h2>                
      </div>
          <div className="skills_title">
            <h1>Tecnologías y lenguajes que manejo</h1>
          </div>

      <div class="skills">
        <div class="skills_card">
          <div class="img_card_">
            <img src={HTML} alt="Logo_HTML" />
          </div>
          <div class="content_card_">
              <div>
                <h3>+ 100</h3>
                <p>Horas de teoría</p>
              </div>
          </div>
      </div> 

         <div className="skills_card">
          <div className="img_card_">
            <img src={CSS} alt="Logo_CSSS" />
          </div>
          <div className="content_card_">
              <div>
                <h3>+ 100</h3>
                <p>Horas de teoría</p>
              </div>
          </div>
         </div> 

         <div className="skills_card">
          <div className="img_card_">
            <img src={JS} alt="Logo_JS" />
          </div>
          <div className="content_card_">
              <div>
                <h3>+ 100</h3>
                <p>Horas de teoría</p>
              </div>
          </div>
         </div> 

         <div className="skills_card">
          <div className="img_card_">
            <img src={REACT} alt="Logo_React" />
          </div>
          <div className="content_card_">
              <div>
                <h3>+ 100</h3>
                <p>Horas de teoría</p>
              </div>
          </div>
         </div> 
         <div className="skills_card">
          <div className="img_card_">
            <img src={NODE} alt="NODE" />
          </div>
          <div className="content_card_">
              <div>
                <h3>+ 100</h3>
                <p>Horas de teoría</p>
              </div>
          </div>
         </div>
        </div>
    </div>
  )
}
}

export default Habilities