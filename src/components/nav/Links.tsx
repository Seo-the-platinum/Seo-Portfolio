import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex gap-4 justify-center pr-4'>
        <Link 
          className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-teal-200
          dark:text-teal-600 
          font-bold text-lg hover:animate-pulse' href='/projects'>Projects</Link>
        <Link
          className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-teal-200 
          dark:text-teal-600 
          font-bold text-lg hover:animate-pulse' href='#about'>About</Link>
        <Link className='transition-all duration-500
          hover:-translate-y-2
          hover:scale-125
          dark:hover:text-teal-200
          dark:text-teal-600 
          font-bold text-lg hover:animate-pulse' href='#contact'>Contact</Link>
    </div>
  )
}

export default Links