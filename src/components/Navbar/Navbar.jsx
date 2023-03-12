import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import { socialIcons } from '../../Data';
import {MdOutlineLightMode,MdLightMode} from 'react-icons/md'
import { useGlobalStates } from '../utils/global.context';

const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    const {state,dispatch}=useGlobalStates()

    const dark=state.dark;

    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
                    
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
              <div className="logo">
                    <h3>Mc</h3>
              </div>
              <ul className="nav_links">
                  <li ><a style={{color:dark ?'rgb(0, 0, 0)': '#fff'}} href='#home'>home</a></li>
                  <li ><a style={{color:dark ?'rgb(0, 0, 0)': '#fff'}} href='#sobremi'>sobre mi</a></li>
                  <li ><a style={{color:dark ?'rgb(0, 0, 0)': '#fff'}} href='#habilidades'>habilidades</a></li>
                  <li ><a style={{color:dark ?'rgb(0, 0, 0)': '#fff'}} href='#portfolio'>portfolio</a></li>
                  <li ><a style={{color:dark ?'rgb(0, 0, 0)': '#fff'}} href='#contacto'>contacto</a></li>
              </ul>
              <div className='social'>
                    <div className="social_icons" style={{color: dark ? 'black' :'#fff'}}>
                        {socialIcons.map((socialIcon, index) => {
                        return (
                            <div key={index}>
                                <a href={socialIcon.link}>{socialIcon.icon}</a>
                            </div>
                        )
                    })}
                    
                    </div> 
                     <div className='Nav_container-btn'onClick={()=>dispatch(!state.dark ? { type: 'dark' }: { type: 'light' })}>
                       {dark ? <MdOutlineLightMode/> : <MdLightMode/>}
                    </div> 
             </div>
             
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                          style={{background: dark ?'#fff' :'#000'}}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
                  style={{color: dark ? 'black' :'#fff'}}
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a style={{color: dark ? 'black' :'#fff'}}
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
                  <div className='menuX_btn'onClick={()=>dispatch(!state.dark ? { type: 'dark' }: { type: 'light' })}>
                       {dark ? <MdOutlineLightMode/> : <MdLightMode/>}
                    </div> 
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar