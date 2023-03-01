import React from 'react'
import Skills from '../skills/Skills'
import ResizeHook from '../../hooks/ResizeHook'

const About = () => {
  const windowSize = ResizeHook()
  return (
    <div className='relative group p-0.5 overflow-hidden hover:scale-110 transition-hover duration-500 rounded md:mt-4'id='about'>
      <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-r dark:from-violet-900 dark:to-emerald-400 opacity-60
        group-hover:bg-gradient-to-r from-amber-300 to-sky-500
        group-hover:opacity-100
        group-hover:duration-500
        group-hover:brightness-125 group-hover:blur saturate-150
         transition-all duration-1000' style={windowSize > 768 ? {height: '50%', width: '110%', left: '-3%', top: '25%'} : {height: '140%', width: '50%',left:'25%', top:'-20%'}}/>
      <div className='flex flex-col relative p-4 dark:bg-[#150726] bg-cyan-100 rounded group-hover:duration-500 transition-all duration-1000 md:flex-row'>
        <div className='flex flex-col md:gap-8'>
          <h1 className='dark:text-teal-600 text-5xl py-4 md:py-0 text-sky-800'>{`Eliseo Flores`}</h1>
          <h2 className='dark:text-slate-300 md:w-4/5 leading-8 text-sky-800'>
            <span className='dark:text-violet-900 italic font-semibold text-emerald-400 text-xl'>F</span><span className='italic'>ull stack</span> developer with <br/>
            <span className='dark:text-violet-900 italic font-semibold text-emerald-400 text-xl'>P</span><span className='italic'>ositivity</span>,
            <span className='dark:text-violet-900 italic font-semibold text-emerald-400 text-xl'>H</span>
            <span className='italic'>umility</span>, and a passion to <span className='dark:text-violet-900 italic font-semibold text-emerald-400 text-xl'>L</span>
            <span className='italic'>evel up</span>
          </h2>
        </div>
        <Skills/>
      </div>
    </div>
  )
}

export default About