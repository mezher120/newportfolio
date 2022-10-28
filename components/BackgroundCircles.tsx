import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
        scale: 0
    }}
    animate={{
        scale: [0,2,1],
        opacity: [0.5, 1],
    }}
    transition={{
        duration: 4,
    }}
    className='relative flex justify-center items-center '>
        <div className='absolute border border-gray-500 rounded-full w-[550px] h-[550px] mt-52 animate-pulse'></div>
    </motion.div>
  )
}

export default BackgroundCircles