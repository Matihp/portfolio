import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

const Contact = () => {

  const [state, handleSubmit] = useForm("mknagnka");
  
  if (state.submitting) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se envio correctamente.',
      showConfirmButton: false,
      timer: 2000,
      width: 400,
      padding: '3em',
      color: 'white',
      background: '#1f1d1d'
    })
  }

  return (
    <div className="container" id="contacto">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <h1 style={{color:'rgb(195, 104, 104)'}}>Contacto</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil unde atque voluptates, cumque molestias eveniet voluptatum animi consectetur magni mollitia dolor exercitationem labore maiores!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder='Nombre'name='name'minlength='4' required/>
              <input type="text" placeholder='Apellido'name='last name'minlength='4' required/>
            </div>
            <div className="row">
              <input type="text" placeholder='Celular' name="celular"required/>
              <input type="email" placeholder='Email' name="email"minlength='4' required/>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="row">
              <textarea id="message" placeholder='Mensaje'name="message"minlength='6' required></textarea>
            </div>
            
            <button type="submit" disabled={state.submitting} className='btn'>Enviar</button>

          </form>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Contact