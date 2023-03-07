import React from 'react'
import { useRouter } from 'next/router'
import { projects } from '../../utils/projects'
import Image from 'next/image'
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiCss3, SiPostgresql, SiTypescript } from 'react-icons/si'
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
    <div className='flex flex-col items-center mt-4 lg:mt-12 max-w-7xl self-center'>
      <h1 className='text-4xl text-sky-900 dark:text-emerald-500 mb-12'>{project.title}</h1>
      <div className='flex flex-col overflow-hidden relative sm:w-3/6 lg:w-2/6 p-0.5 rounded hover:scale-110 transition-hover hover:-translate-y-4 duration-500 ease-in-out peer/shadow'>
        <Image className=' md:self-center rounded z-10 peer/image' src={project.source} alt={`${project.title} thumbnail`}/>
        <div className='absolute peer-hover/image:animate-spin-slow dark:peer-hover/image:bg-gradient-to-r dark:from-violet-900 dark:to-emerald-400
          peer-hover/image:duration-500
          peer-hover/image:brightness-125 peer-hover/image:blur rounded
          peer-hover/image:bg-gradient-to-r from-amber-300 to-sky-600
          saturate-150' style={{height: '50%', width: '120%',left:'-10%', top:'20%'}}/>
      </div>
      <div className='hidden sm:block
        peer-hover/shadow:scale-150 peer-hover/shadow:-translate-y-8
        content-[""] mt-8 lg:mt-20 rounded-full bg-sky-300 dark:bg-violet-900 dark:opacity-20 opacity-60
        blur-lg sm:w-2/6 h-20 duration-500 ease-in-out'/>
      <div className='sm:justify-evenly sm:mt-8 flex flex-col mb-10 sm:flex-row relative overflow-hidden'>
          <div className='sm:my-8 sm:animate-fadeFromLeft relative md:text-center my-2 flex flex-col sm:w-1/4 md:w-2/6'>
            <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>The Tech</h3>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              { project.tech.map((skill, i)=> (<div key={skill} className='flex flex-col my-2 md:p-0 items-center'>
                {skills[skill as keyof typeof skills]}
                <h3>{project.tech[i]}</h3>
              </div>))}
            </div>
          </div>
          <div className="sm:my-8 relative sm:animate-fadeIn sm:w-1/4 md:w-2/6 my-2 flex flex-col md:text-center">
            <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>Where To See More</h3>
            <div className='flex gap-4 justify-evenly items-center md:justify-center md:gap-8'>
              <a className='hover:scale-125 transform-all duration-500' href={project.github}>
                <BsGithub className='fill-sky-900 hover:fill-sky-600 dark:fill-emerald-500 dark:hover:fill-emerald-400' size='2rem'/>
              </a>
              <Button route={project.url}/>
            </div>
          </div>
          <div className='sm:my-8 my-2 relative md:animate-fadeFromRight sm:w-1/4 md:w-2/6'>
            <h3 className='text-sky-900 dark:text-slate-300 text-2xl my-4'>Why I Built It</h3>
            <p className='text-sky-900 dark:text-slate-300 text-sm leading-relaxed md:text-lg'>{ project.description }</p>
          </div>
      </div>
    </div>
  )
}

export default Project