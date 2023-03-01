import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Social = () => {
  return (
    <div className='relative rounded flex justify-evenly gap-8 md:gap-12 items-center'>
        <a className='hover:scale-150 transition-hover duration-500 hover:animate-pulse' href='https://github.com/Seo-the-platinum'>
            <BsGithub className='fill-sky-900 hover:fill-sky-600 dark:fill-emerald-500 dark:hover:fill-emerald-400 hover:brightness-110' size='2em'/>
        </a>
        <a className='hover:scale-150 transition-hover duration-500 hover:animate-pulse' href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
            <BsLinkedin className='fill-sky-900 hover:fill-sky-600 dark:fill-emerald-500 dark:hover:fill-emerald-400 hover:brightness-110' size='2em'/>
        </a>
    </div>
  )
}

export default Social