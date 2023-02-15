import React from 'react'
import Link from 'next/link'

const Tab = () => {
  return (
    <div className='text-center'>
        <Link className='hover:bg-teal-600 dark:text-teal-700 font-bold text-lg' href='#projects'>
            Projects
        </Link>
    </div>
  )
}

export default Tab