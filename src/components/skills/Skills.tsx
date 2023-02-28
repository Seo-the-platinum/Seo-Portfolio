import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiCss3, SiPostgresql, SiTypescript} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='dark:bg-[#150726] flex flex-col mt-8 md:mt-0 md:items-center'>
        <h3 className='text-xl text-sky-900 dark:text-slate-300 py-4'>Some Tech I Work With</h3>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col items-center m-2'>
                <DiJavascript1 color='yellow' size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Javascript</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <FaReact color='cyan' size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>React</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <SiCss3 color='blue' size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Css</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <SiTypescript size='2rem' color='#2a47db'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Typescript</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <SiTailwindcss color='cyan' size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <SiPrisma size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Prisma</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <SiPostgresql size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Postgresql</p>
            </div>
            <div className='flex flex-col items-center m-2'>
                <TbBrandNextjs size='2rem'/>
                <p className='text-xs text-sky-800 dark:text-slate-300'>Nextjs</p>
            </div>
        </div>
    </div>
  )
}

export default Skills