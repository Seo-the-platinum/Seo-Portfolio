import React from 'react'
import { useRouter } from 'next/router'
import { projects } from '../../utils/projects'
import Image from 'next/image'
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiCss3, SiPostgresql, SiTypescript} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Button from '../../components/global/Button'

const skills = {
  css: <SiCss3 color='blue' size='2rem'/>,
  nextjs: <TbBrandNextjs size='2rem'/>,
  postgresql: <SiPostgresql size='2rem'/>,
  prisma: <SiPrisma size='2rem'/>,
  react: <FaReact color='cyan' size='2rem'/>,
  tailwind: <SiTailwindcss color='cyan' size='2rem'/>,
  typescript: <SiTypescript size='2rem' color='#2a47db'/>,
  javascript: <DiJavascript1 color='yellow' size='2rem'/>,
}

const Project = () => {
    const router = useRouter()
    const { query } = router
    const project = projects.find(project=> project.title === query.project)
    if (!project) return null
  return (
    <div className='flex flex-col items-center font-serif mb-12 md:mt-8'>
      <div className='relative group p-0.5 mt-2 overflow-hidden hover:scale-110 transition-hover duration-500 rounded'id='about'>
      <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-r dark:from-violet-900 dark:to-emerald-400
        group-hover:duration-500
        group-hover:brightness-125 group-hover:blur rounded
        group-hover:bg-gradient-to-t from-amber-300 to-sky-500
        saturate-150
         transition-all ' style={{height: '170%', width: '50%',left:'25%', top:'-30%'}}/>
         <div className='flex flex-col relative p-4 dark:bg-[#150726] bg-cyan-100 rounded'>
          <h1 className='dark:text-slate-300 text-sky-900 text-4xl mb-4' >{project.title}</h1>
          <Image className='max-w-full md:max-w-lg animate-fadeIn md:self-center' src={project.source} alt={`${project.title} thumbnail`}/>
          <div className='sm:flex sm:flex-row max-w-3xl sm:justify-evenly sm:mt-8'>
            <div className='my-8 animate-fadeFromLeft relative md:text-center'>
              <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>The Tech</h3>
              <div className='grid grid-cols-2 md:grid-cols-3'>
                { project.tech.map((skill, i)=> (<div key={skill} className='flex flex-col my-2 md:p-0 items-center'>
                  {skills[skill as keyof typeof skills]}
                  <h3>{project.tech[i]}</h3>
                </div>))}
              </div>
            </div>
            <div className="my-8 relative animate-fadeFromRIght sm:max-w-1/4">
              <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>Where To See More</h3>
              <div className='flex gap-4 justify-evenly items-center'>
                <a className='hover:scale-125 transform-all duration-500' href={project.github}>
                  <BsGithub className='fill-cyan-500 hover:fill-cyan-700 dark:fill-teal-500 dark:hover:fill-teal-400' size='2rem'/>
                </a>
                <Button route={project.url}/>
              </div>
            </div>
            <div className='my-8 animate-fadeIn sm:w-1/4'>
              <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>Why I Built It</h3>
              <p className='text-sky-900 dark:text-slate-300 text-sm leading-relaxed'>{ project.description }</p>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Project