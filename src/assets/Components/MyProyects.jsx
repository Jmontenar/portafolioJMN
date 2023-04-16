import React, { useEffect, useState } from 'react'
import './Styles/MyProyects.css'
import RickAndMorty from '../img/RickAndMorty.png'
import Loading from './Loading'

const MyProyects = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])

if(isLoading){
  return <Loading />
  }else{
  return (
    <div className='proyect_container'>
      <div className="proyects_title">
        <h1>Proyectos</h1>
      </div>
    <div className='proyects'>
    <div className="proyects_card">
      <div className="img_card">
        <img src={RickAndMorty} alt="Logo_Academlo" />
      </div>
        <div className="proyect_content_card">
          <div>
            <h3>Aplicación Rick and Morty</h3>
            <p>Aplicativo desarrollado con el frameworkk React JS, el cual consta en realizar consultas a una API utilizando axios, implementanto un buscador por cada universo disponible según la serie y una paginación para organizar los personajes.</p>
          </div>
            </div>
          </div>

        <ul>
          <li>Ecomerce</li>
          <li>Poke Api</li>
          <li>Random Coutes / Random Color</li>
        </ul>
    </div>
    </div>
  )
}
}
export default MyProyects