import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiCss3, SiPostgresql, SiHtml5 } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='dark:bg-[#150726] flex flex-col mt-8'>
        <h3 className='text-2xl dark:text-slate-300 py-4'>Skills</h3>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col items-center animate-bounce'>
                <SiHtml5 color='#d64b2f' size='2rem'/>
                <p>Html</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <DiJavascript1 color='yellow' size='2rem'/>
                <p>Javascript</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <FaReact color='cyan' size='2rem'/>
                <p>React</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <SiTailwindcss color='cyan' size='2rem'/>
                <p>Tailwind</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <SiPrisma size='2rem'/>
                <p>Prisma</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <SiCss3 color='blue' size='2rem'/>
                <p>Css</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <SiPostgresql size='2rem'/>
                <p>Postgresql</p>
            </div>
            <div className='flex flex-col items-center animate-bounce'>
                <TbBrandNextjs size='2rem'/>
                <p>Nextjs</p>
            </div>
        </div>
    </div>
  )
}

export default Skills