import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex gap-4 justify-center pr-4'>
      <Link 
          className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-emerald-400
          dark:text-emerald-500 text-sky-900 
          font-bold text-lg hover:animate-pulse' href='/#home' scroll={false}>Home</Link>
        <Link 
          className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-emerald-400
          dark:text-emerald-500 text-sky-900 
          font-bold text-lg hover:animate-pulse' href='/#projects' scroll={false}>Projects</Link>
        <Link
          className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-emerald-400 
          dark:text-emerald-500 text-sky-900 
          font-bold text-lg hover:animate-pulse' href='/#about' scroll={false}>About</Link>
        <Link className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-emerald-400
          dark:text-emerald-500 text-sky-900 
          font-bold text-lg hover:animate-pulse' href='/#contact' scroll={false}>Contact</Link>
    </div>
  )
}

export default Links