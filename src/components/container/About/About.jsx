import React from 'react'
import "./About.scss";
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portf from '../../../assets/portf.jpg'
import { useGlobalStates } from '../../utils/global.context';
const About = () => {

  const {state}=useGlobalStates();

  const dark=state.dark;

  return (
    <div className="container " id='sobremi'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <h1 style={{color:'rgb(195, 104, 104)'}}>Sobre Mi</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
          style={{boxShadow:dark ? '0 0 20px #ff0000' :'0 0 20px #a57646'}}
          >
          <motion.img src={portf}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
            alt='Matias Contreras'
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          style={{color: dark ? 'black' :'#fff'}}
        >

          <p>Desde muy chico, he estado interesado en la informática y la programación. Me encanta aprender nuevos lenguajes y herramientas, y experimentar con diferentes tecnologías para mejorar mis habilidades y conocimientos.</p>
          <p>Me caracterizo por ser una persona perseverante, que se enfoca en alcanzar los objetivos propuestos y que no se rinde ante los desafíos.</p>
          <p>Una de las cosas que me ha permitido avanzar es mi capacidad para mantener la constancia en el trabajo. Entiendo que la programación es un proceso complejo que requiere paciencia y dedicación. Por eso, siempre busco formas de mantenerme motivado y enfocado en mis objetivos.</p>
          <p>Lo que más me motiva es trabajar en equipo. Me encanta la dinámica de colaboración y la posibilidad de aprender de otros profesionales con diferentes habilidades y perspectivas. Disfruto de compartir conocimientos y de ayudar a mis compañeros de equipo a alcanzar sus objetivos.</p>
          <p>Si tienes interés en colaborar en algún proyecto o si simplemente quieres conversar sobre tecnología, no dudes en contactarme. Me encantaría escuchar tus propuestas e ideas, y trabajar contigo de manera conjunta.</p>
          <motion.a href='https://www.canva.com/design/DAFi7jWPo0g/jmQ3reahqEi67FGka_t13g/view?utm_content=DAFi7jWPo0g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{background: dark ? 'orange' :'#ff3333',fontWeight:'700'}}
          >
            Descargar CV
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About