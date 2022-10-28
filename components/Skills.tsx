import React from 'react'
import { motion } from 'framer-motion'
import SkillBall from './Skill';
import { Skill } from '../typings';

type Props = {
  skills: Skill[]
}

function Skills({skills}: Props) {
  return (
    <motion.div className='flex flex-col h-screen text-center  md:text-left md:flex-row mx-auto max-w-4xl px-10 justify-evenly items-center '>
        <div className='flex flex-col items-center'>
        <h3 className=' top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for currency proficiency
        </h3>

        <div className=' grid grid-cols-3 gap-5 mt-8 md:grid-cols-4'>
          {skills?.slice(0, skills.length / 2).map(skill => (
            
            <SkillBall directionLeft={true} key={skill._id} skill={skill}/>
          ))}
          {skills?.slice(skills.length / 2, skills.length).map(skill => (
            
            <SkillBall directionLeft={false} key={skill._id} skill={skill}/>
          ))}
        </div>

        </div>
        
    </motion.div>
  )
}

export default Skills