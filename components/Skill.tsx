import React from 'react'
import { motion } from 'framer-motion'
import { Skill as Ski } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: Ski
    directionLeft: boolean,
}

export default function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{
            duration: 0.5,
        }}
        whileInView={{
            opacity: 100,
            x: 0
        }}
        className='border border-gray-500 w-24 h-24 md:w-28 md:h-28 xl:w-20 xl:h-20
        filter group-hover:grayscale transition duration-200 ease-in-out rounded-lg'
        src={urlFor(skill.image).url()} alt=''>
        </motion.img>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white
         h-24 w-24 md:w-28 md:h-28 xl:w-20 xl:h-20 rounded-lg'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}</p>
            </div>
        </div>
    </div>
  )
}