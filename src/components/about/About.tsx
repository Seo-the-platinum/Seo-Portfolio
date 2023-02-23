import React from 'react'
import Skills from '../skills/Skills'
const About = () => {
  return (
    <div className='relative group p-0.5 mt-8 overflow-hidden hover:scale-110 transition-hover duration-500 rounded'id='about'>
      {/* <div className='absolute -inset-0.5 dark:group-hover:bg-gradient-to-tr from-purple-700 to-teal-600 opacity-60
        group-hover:-translate-y-2
        rounded blur group-hover:opacity-100
        group-hover:duration-500
         transition-all duration-1000'/> */}
         <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-tr from-purple-700 to-teal-600 opacity-60
        group-hover:opacity-100
        group-hover:duration-500
         transition-all duration-1000' style={{height: '150%', width: '50%',left:'25%', top:'-20%'}}/>
      <div className='flex flex-col relative p-4 dark:bg-[#150726] rounded  group-hover:duration-500 transition-all duration-1000'>
        <h2 className='dark:text-slate-300 font-serif'>{`Hello there, my name is`}</h2>
        <h1 className='dark:text-teal-600 text-5xl font-serif py-4'>{`Eliseo Flores`}</h1>
        <h2 className='dark:text-slate-300 w-4/5 leading-8'>
          <span className='dark:text-indigo-600 italic font-semibold text-xl'>F</span><span className='italic'>ull stack</span> developer with <br/>
          <span className='dark:text-indigo-600 italic font-semibold text-xl'>P</span><span className='italic'>ositivity</span>, 
          <span className='dark:text-indigo-600 italic font-semibold text-xl'>H</span>
          <span className='italic'>umility</span>, and a passion to <span className='dark:text-indigo-600 italic font-semibold text-xl'>L</span>
          <span className='italic'>evel up</span>
        </h2>
        <Skills/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default About