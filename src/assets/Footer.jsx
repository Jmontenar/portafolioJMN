import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import Logo from './img/LOGO_JORGE.png'

const Footer = () => {
  return (
    <footer>
      <div className='container_footer'>
        <div className="box_footer_img">
          <img src={Logo} alt="Logo" />   
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa fugit quibusdam labore deleniti obcaecati. Non magni dignissimos eveniet quia consequuntur corrupti temporibus, facere reprehenderit nisi laboriosam, distinctio quod quas.</p>     
        </div>
        <div className="box_footer_atajos">
        <h3>Atajos</h3>
        <NavLink className="footer_link"  to="/">Home</NavLink>  
        <NavLink className="footer_link"  to="/AboutMe">About Me</NavLink>
        <NavLink className="footer_link"  to="/Habilities">Habilities</NavLink>
        <NavLink className="footer_link"  to="/MyProyects">My projects</NavLink>
        <NavLink className="footer_link"  to="/ContactMe">Contact me</NavLink>
        <NavLink className="footer_link"  to="/ContactMe">Download my portafolio</NavLink>
        </div>
      <div className="box_footer_social">
        <h3>Social</h3>
        <a href="https://wa.me/573148539604?text=Cuéntame%20como%20quieres%20tu%20web%20%20site" target="_blank">
          <i className="fa-brands fa-whatsapp"></i><span>  Contáctame de forma más personal por What´s app.</span>
        </a>
        <a href="tel:+573148539604">
          <i className="fa-solid fa-mobile-screen-button"></i><span>  Puedes llamarme a mi celular si  lo deseas.</span>
        </a>
        <a href="https://www.linkedin.com/in/jorge-iván-monterrosa-narváez-15b01833" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i><span>  Conectemos por linked In.</span>
        </a>
        <a href="https://www.instagram.com/jorge_ivan0926/" target="_blank">
          <i className="fa-brands fa-instagram"></i><span>  Un poco de mi vida personal.</span>
        </a>
        <a href="https://github.com/Jmontenar/" target="_blank">
          <i className="fa-brands fa-github"></i><span>  Puedes darle una mirada a mis proyectos.</span>
        </a>
      </div>
      </div>
      <div className="box_copyright">
        <hr></hr>
      <p>Todos los derechos reservados © 2023</p><b>JMonterrosa</b>
        </div>
      </footer>
  )
}

export default Footer