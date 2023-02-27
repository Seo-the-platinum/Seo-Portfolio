import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiCss3, SiPostgresql, SiTypescript} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='dark:bg-[#150726] flex flex-col mt-8 md:mt-0'>
        <h3 className='text-xl dark:text-slate-300 py-4'>Some Tech I Work With</h3>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col items-center'>
                <DiJavascript1 color='yellow' size='2rem'/>
                <p className='text-sm'>Javascript</p>
            </div>
            <div className='flex flex-col items-center'>
                <FaReact color='cyan' size='2rem'/>
                <p>React</p>
            </div>
            <div className='flex flex-col items-center'>
                <SiCss3 color='blue' size='2rem'/>
                <p className='text-xs'>Css</p>
            </div>
            <div className='flex flex-col items-center'>
                <SiTypescript size='2rem' color='#2a47db'/>
                <p className='text-xs'>Typescript</p>
            </div>
            <div className='flex flex-col items-center'>
                <SiTailwindcss color='cyan' size='2rem'/>
                <p className='text-xs'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center'>
                <SiPrisma size='2rem'/>
                <p className='text-xs'>Prisma</p>
            </div>
            <div className='flex flex-col items-center'>
                <SiPostgresql size='2rem'/>
                <p className='text-xs'>Postgresql</p>
            </div>
            <div className='flex flex-col items-center'>
                <TbBrandNextjs size='2rem'/>
                <p className='text-xs'>Nextjs</p>
            </div>
        </div>
    </div>
  )
}

export default Skills