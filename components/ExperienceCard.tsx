import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  exp: Experience
}

export default function ExperienceCard({exp}: Props) {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[500px] 
    snap-center bg-gray-600 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden  ' >
        <img className='rounded-full object-contain w-20 h-20 object-center mt-3' 
        src={urlFor(exp?.companyImage).url()}
        alt=''></img>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{exp.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{exp.company}</p>
            <div className='flex space-x-2'>
                {exp?.technologies.map( tech => (
                  <img key={tech._id} className='h-10 w-10 rounded-full object-contain' src={urlFor(tech.image).url()} alt=''></img>
                  
                ))}
            </div>
            <p>{exp.dateStarted}- {exp.dateEnded}</p>

            <ul className='list-disc space-y-4 mt-2 text-lg h-36 w-auto overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-400'>
                  {exp?.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
            </ul>
        </div>
    </div>
  )
}