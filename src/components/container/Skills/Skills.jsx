import React, { useState } from 'react'
import "./Skills.scss";
import { icons } from '../../../Data';
import { experiences } from '../../../Data';
import { motion } from 'framer-motion';
import { useGlobalStates } from '../../utils/global.context';
const Skills = () => {
  const [active, setActive] = useState(1)
  const {state}=useGlobalStates()
  return (
    <div className="container" id="habilidades">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <h1 style={{color:'rgb(195, 104, 104)'}}>Habilidades</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Habilidades</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Experiencias</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools"style={{color:state.dark ?'black':'#afafaf'}} >
              <div className='tools-name'style={{color:state.dark ?'white':'#afafaf'}}>
                {icon.name}
              </div>
              {icon.i}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
        style={{color:state.dark ? 'black' : '#fff'}}
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
    </div>
  )
}

export default Skills