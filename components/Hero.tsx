import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import { fetchSocials } from '../utils/fetchSocials'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo,
}

export default function Hero({pageInfo}: Props) {
    const [word, setWord] = useTypewriter({
        words: [`Hello, I am ${pageInfo?.title}`, "I am a FullStack developer"],
        loop: true,
        typeSpeed: 70
    })
    
  return (
    <div className='flex flex-col items-center h-screen space-y-8 justify-center text-center overflow-hidden mx-auto max-w-4xl'>
        <BackgroundCircles></BackgroundCircles>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} alt=''></img>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
            <span className='mr-3'>{word}</span>
            <Cursor></Cursor>
        </h1>
        <div className='pt-5'>
            <button className='buttonHero' onClick={() => fetchSocials()}>About</button>
            <Link href='#projects'>
            <button className='buttonHero'>Projects</button>
            </Link>
            <Link href='#skills'>
            <button className='buttonHero'>Skills</button>
            </Link>
            <Link href='#education'>
            <button className='buttonHero'>Education</button>
            </Link>
        </div>
        </div>

    </div>
  )
}