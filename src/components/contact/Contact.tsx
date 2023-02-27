import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='relative p-0.5 group overflow-hidden hover:scale-110 transition-hover duration-500 rounded mb-16 mt-4'>
        <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-r from-violet-900 to-emerald-400 opacity-60
        dark:group-hover:brightness-125 dark:group-hover:blur
        dark:grouphover:drop-shadow
        group-hover:opacity-100
        group-hover:duration-500
         transition-all duration-1000' style={{ height: '50%', width: '110%',left:'-2%', top: '20%' }}/>
         <div className='relative rounded flex justify-center gap-12 dark:bg-[#150726] p-4 items-center space-between max-w-7xl' id='contact'>
            <a href='https://github.com/Seo-the-platinum'>
                <BsGithub size='2em' color='#0d9488'/>
            </a>
            <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
                <BsLinkedin size='2em' color='#0d9488'/>
            </a>
            <a href='mailto:seo.flores7@gmail.com'>
                <MdEmail size='2em' color='#0d9488'/>
            </a>
         </div>
    </div>
  )
}

export default Contact