import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='relative p-0.5 group overflow-hidden hover:scale-110 transition-hover duration-500 rounded mb-16 mt-4 md:mb-0'>
        <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-r dark:from-violet-900 dark:to-emerald-400
          group-hover:bg-gradient-to-r from-amber-300 to-sky-500
          group-hover:brightness-125 group-hover:blur
          group-hover:duration-500
         transition-all duration-1000' style={{ height: '50%', width: '110%',left:'-2%', top: '20%' }}/>
         <div className='relative rounded flex justify-center gap-12 dark:bg-[#150726] p-4 items-center space-between max-w-7xl bg-cyan-100' id='contact'>
            <a className='hover:scale-150 transition-hover duration-500' href='https://github.com/Seo-the-platinum'>
                <BsGithub className='fill-sky-900 hover:dark:fill-emerald-400 hover:fill-sky-600 dark:fill-emerald-500' size='2em'/>
            </a>
            <a className='hover:scale-150 transition-hover duration-500' href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
                <BsLinkedin className='fill-sky-900 hover:dark:fill-emerald-400 hover:fill-sky-600 dark:fill-emerald-500' size='2em'/>
            </a>
            <a className='hover:scale-150 transition-hover duration-500' href='mailto:seo.flores7@gmail.com'>
                <MdEmail className='fill-sky-900 hover:dark:fill-emerald-400 hover:fill-sky-600 dark:fill-emerald-500' size='2em'/>
            </a>
         </div>
    </div>
  )
}

export default Contact