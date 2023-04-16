import React, { useEffect, useState } from 'react'
import './Styles/AboutMe.css'
import LogoAcademlo from '../img/LogoAcademlo.png'
import LogoUdeA from '../img/LogoUdeA.png'
import Loading from './Loading'

const AboutMe = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])

if(isLoading){
  return <Loading />
  }else{
  return (
    <div className='about_container'>
      <div className='about_me'><p>Soy una persona bastante curiosa, un entusiasta por lo que hago, por descubrir nuevos mundos. El descubrir la programación ha sido una de las cosas más apasionantes y a la vez más desafiantes que he vivido, puesto que soy Microbiologo y bioanálista desde septiembre de 2013. Soy muy dedicado y creativo, siempre estoy en busca de mejorar personal y profesionalmente. Me gustan los desafíos que pueda enfrentar a lo largo del ejercicio de mi labor.</p></div>
      <div className="education">
          <div className="education_card">
            <div className="img_card">
              <img src={LogoAcademlo} alt="Logo_Academlo" />
            </div>
            <div className="content_card">
                <div>
                  <h3>Desarrollo Web - Full stack</h3>
                  <p>Academlo Mayo 2022 - Abril 2023</p>
                </div>
            </div>
          </div> 

          <div className="education_card">
          <div className="img_card">
            <img src={LogoUdeA} alt="Logo_UdeA"  />
          </div>
          <div className="content_card">
              <div>
                <h3>Microbiología y Bioanálisis</h3>
                <p>Universidad de Antioquia 2006 - 2013</p>
              </div>
          </div>
         </div>
      </div>
    </div>
    
  )
}
}
export default AboutMe