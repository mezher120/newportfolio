import type { GetServerSideProps, GetStaticProps, NextPage, } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import ExperienceWork from '../components/ExperienceWork'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'



type Props = {
  experience: Experience[],
  pageInfo: PageInfo,
  projects: Project[],
  skills: Skill[],
  socials: Social[]
}

const Home = ({experience, pageInfo, projects, skills, socials}: Props) => {

  return (
    <div className='bg-gray-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/60 '>
      <Head>
        <title>Javier Ferrari Mezher - Portfolio</title>
      </Head>

     <Header socials={socials} ></Header>

     <section id='hero' className='snap-center'>
      <Hero pageInfo={pageInfo} ></Hero>
     </section>

     <section id='about' className='snap-center'>
      <About pageInfo={pageInfo} ></About>
     </section>

     <section id='experience' className='snap-center'>
      <ExperienceWork experience={experience} ></ExperienceWork>
     </section>

     <section id='skills' className='snap-center'>
     <Skills skills={skills} ></Skills>
     </section>

     {/* Projects */}
     <section id='projects' className='snap-center' >
      <Projects projects={projects} ></Projects>
     </section>

     {/* Contact */}
     <section id='contact' className='snap-center'>
      <Contact></Contact>
     </section>

     <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center '>
          <ArrowUpCircleIcon className='w-10 h-10 animate-pulse hover:fill-orange-400/80'></ArrowUpCircleIcon>
        </div>
      </footer>
     </Link>

    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const experience: Experience[] = await fetchExperience(); 
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      experience,
      pageInfo,
      projects,
      skills,
      socials
    },
    revalidate: 10,
  };
};