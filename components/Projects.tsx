import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { url } from 'inspector';

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center  mx-auto max-w-4xl px-10 justify-evenly items-center '>
        <h3 className='relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden z-20 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/60'>
        {projects?.map((e, i) => (
            <div className='w-full h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 
            md:p-44'>
                <img                 
                className='w-44 h-44 rounded-md mt-5' src={urlFor(e.image).url()} alt='' />
                <div> 
                <h4><a href={e.linkToBuild} target='_blank' >{e.linkToBuild}</a></h4>
                </div>

        <div className='flex flex-col space-y-10 px-0 w-[70%]'>
        <h4 className='hidden text-4xl font-semibold text-center sm:inline sm:text-base'>
            <span className='underline decoration-orange-400'>Project {i + 1} of {projects.length}:</span> {e.title}
        </h4>
        <p className='hidden text-lg text-center md:text-base sm:inline'>
            {e.summary}
        </p>
        </div>
        {/* <div className='flex space-x-2'>
            {e.techologies?.map(tech => (
                <img className='h-10 w-10 rounded-full' src={urlFor(tech.image).url()} alt=''></img>
            ))}
        </div> */}
            </div>
        ))}
    </div>
    </div>
  )
}

export default Projects;