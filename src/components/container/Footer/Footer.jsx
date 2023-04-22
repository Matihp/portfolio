import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { useGlobalStates } from '../../utils/global.context';

const Footer = () => {
  const {state}=useGlobalStates()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
      style={{color:state.dark ? '#000000' : '#fff'}}
    >
      <div className="copyright">
        <p >
          Copyright&copy;2022 Todos los derechos reservados.
        </p>
      </div>
      <div className="followMe">
        <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                <a style={{color: state.dark ? 'black' :'#fff'}} href={socialIcon.link}>{socialIcon.icon}</a>
              </div>
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default Footer