import React from 'react';
import "./Contact.scss";
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
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder='Nombre'name='name'minLength='4' required/>
              <input type="text" placeholder='Apellido'name='last name'minLength='4' required/>
            </div>
            <div className="row">
              <input type="text" placeholder='Celular' name="celular"required/>
              <input type="email" placeholder='Email' name="email"minLength='4' required/>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="row">
              <textarea id="message" placeholder='Mensaje'name="message"minLength='6' required></textarea>
            </div>
            
            <button type="submit" disabled={state.submitting} className='btn'>Enviar</button>

          </form>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Contact