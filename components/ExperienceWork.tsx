import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';



type Props = {
  experience: Experience[]
}

function ExperienceWork({experience}: Props) {
  console.log(experience, 'estoy en experience')
  return (
    <div className='flex flex-col relative h-screen text-center  md:text-left md:flex-row mx-auto max-w-4xl justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/60 '>
            {experience.map( (exp) => (
              <ExperienceCard key={exp._id} exp={exp}/>
            )) }

        </div>
    </div>
  )
}

export default ExperienceWork