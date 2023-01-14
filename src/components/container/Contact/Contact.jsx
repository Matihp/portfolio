import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
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
          <div className="row">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Celular' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='Mensaje'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#">Enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact