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

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae at rem, tenetur ad ipsa sequi, optio eius laudantium vero minus maxime laborum est et nemo consequatur nostrum distinctio sed, nulla doloribus officiis ea eligendi explicabo.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='#' download=""
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