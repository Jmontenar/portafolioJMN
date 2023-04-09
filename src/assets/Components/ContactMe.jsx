import React from 'react'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser'
import './Styles/ContactMe.css'

const ContactMe = () => {

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_kfc9sci','template_rmd372m',event.target,'Zpr-Y4GIUjP-teTk-')
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
  }
  return (
    <div className='form_container'>
      <form className='form' onSubmit={sendEmail}>
        <h3 className='form_tittle'>ContactMe</h3>
        <div className='form_content'>
          <div className="form_group">
            <input type="text" name='user_name' className='form_input' placeholder=' ' />
            <label for='name' className='form_label'>Nombre</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <input type="email" name='user_email' className='form_input' placeholder=' ' />
            <label for='email' className='form_label'>Correo</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <textarea className='form_input' name="user_message" id="" cols="48" rows="20"></textarea>
            <label className='form_label'>Mensaje</label>
              <div className="btn_modal">
                <label htmlFor="btn-modal">
                  ACTIVAR
              <input type='submit' className='form_submit' value='Enviar'></input>
                </label>
              </div>
              <input type="checkbox" id="btn-modal" />
              <div className="container-modal">
                <div className="content-modal">
                  <h1>Su e-mail ha sido envíado!</h1>
                  <p>En breve estaremos en contacto</p>
                  <div className="btn-cerrar">
                  <label htmlFor="btn-modal">Cerrar</label>
                </div>
                </div>
                
              </div>

          </div>
        
        </div>
      </form>
      </div>
    
  )
}

export default ContactMe