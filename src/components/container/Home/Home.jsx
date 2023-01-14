import React from 'react'
import perfil from '../../../assets/perfil.jpg'
import "./Home.scss"
import { motion, MotionConfig } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useGlobalStates } from '../../utils/global.context'



const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }
    }
  }
const {state}=useGlobalStates()
  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <motion.img
        style={{boxShadow:state.dark ? 'rgb(188 78 72) 5px 5px 20px' :'0 0 20px #a57646'}}
        className='profile'
        whileHover={{ scale: 1.1 }}
        variants={moveVariants}
        animate="animation"
        src={perfil}
        alt ='Matias Contreras'
        >
        </motion.img>
      </div>
      <div className="profile_text">
        <h3 className='name'><span>Matias Contreras</span></h3>
        <span className='text'>
        <Typewriter
            words={['<FullStack-Developer/>','<FullStack-Developer/>']}
            loop={1}
            cursor
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          animate="animation"
        >
          Contactame</motion.a>
      </div>
    </motion.div>
  )
}

export default Home