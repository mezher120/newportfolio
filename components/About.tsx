import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <div className='flex flex-col h-screen text-center  md:text-left md:flex-row mx-auto max-w-4xl px-10 justify-evenly items-center '>
        <div className='flex flex-col items-center'>

        <h3 className=' top-24 uppercase tracking-[20px] text-gray-500 text-2xl p-2'>
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity: 0
        }}
        whileInView={{
          opacity:1,
          x: 0,  
        }}
        transition={{
            duration: 1.2
        }}
        className='rounded-full object-cover h-32 w-32' 
        src={urlFor(pageInfo?.profilePic).url()}>
        </motion.img>

        <div className='space-y-10 px-0 md:px-10 p-2'>
            <h4 className='text-4xl font-semibold'>What <span className='underline decoration-orange-400'>about</span> myself?</h4>
            <p className='text-base'>
            {pageInfo?.backgroundInformation}
            </p>
        </div>
        </div>
    </div>
  )
}

export default About