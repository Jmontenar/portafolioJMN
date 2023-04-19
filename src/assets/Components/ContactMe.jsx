import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Styles/ContactMe.css'
import Loading from './Loading'

const ContactMe = () => {

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_kfc9sci','template_rmd372m',event.target,'Zpr-Y4GIUjP-teTk-')
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
  }
  const [Show, setShow] = useState(false);
  const toggle = () =>{
    setShow(!Show)
  }
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setisLoading(false)
    }, [])

if(isLoading){
  return <Loading />
  }else{
  return (
  <>
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
              <input type='submit' className='form_submit' value='Enviar' onClick={toggle}></input>
          </div>
        </div>
      </form>
      </div>
        <div className={`modal ${Show && "Show"}`} onClick={toggle}>
          <div className="modal-content">  
          <div className="modal-body">
            <div className="message">
              <h3>Su mensaje ha sido enviado!</h3>
              <p>Dentro de poco estaremos en contacto</p>
            </div>
            <div className="button-container">
            <button className='modal-button' onClick={(e)=> e.stopPropagation}>Cerrar</button>
            </div>
          </div>
          </div>
        </div>
  </>
  )
}
}
export default ContactMe