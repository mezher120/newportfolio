import React from 'react'
// tambien se puede usar estilo react es lo mismo para la funcion de hecho importamos react
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';
import Link from 'next/link';

type Props = {
    socials: Social[];
}

export default function Header({socials}: Props) {
  return (
    <div className='flex sticky top-0 justify-between max-w-7xl mx-auto items-start p-5 '>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
        
        {socials.map((social) => (
            <SocialIcon key={social._id} url={social.url} bgColor='transparent' fgColor='gray' />
            
        ))}
        
        </motion.div>

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1, 
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-400 cursor-pointer'>
            <Link href="#contact" >
            <SocialIcon className='cursor-pointer' network='email' bgColor='transparent' fgColor='gray' ></SocialIcon>
            </Link>
            <Link href="#contact">
            <p  className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
            </Link>
        </motion.div>
    </div>
  )
}