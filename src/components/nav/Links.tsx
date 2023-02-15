import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex gap-4 justify-center pr-4'>
        <Link className='hover:bg-teal-600 dark:hover:text-teal-300 dark:hover:bg-transparent dark:text-teal-700 font-bold text-lg hover:animate-pulse' href='/projects'>Projects</Link>
        <Link className='hover:bg-teal-600 dark:hover:text-teal-300 dark:hover:bg-transparent dark:text-teal-700 font-bold text-lg hover:animate-pulse' href='#about'>About</Link>
        <Link className='hover:bg-teal-600 dark:hover:text-teal-300 dark:hover:bg-transparent dark:text-teal-700 font-bold text-lg hover:animate-pulse' href='/projects'>Contact</Link>
    </div>
  )
}

export default Links