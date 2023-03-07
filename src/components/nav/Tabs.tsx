import React from 'react'
import Link from 'next/link'
import Tab from './Tab'

const Tabs = () => {
  return (
    <div className='flex justify-between fixed bg-cyan-50 dark:bg-[#05011a] bottom-0 border-t border-amber-300 dark:border-violet-900 py-2 left-0 w-full px-4'>
        <Link className='text-sky-900 dark:text-emerald-500 font-bold md:text-xl' href='/#home' scroll={false}> Home </Link>
        <Tab route={'projects'}/>
        <Tab route={'about'}/>
        <Tab route={'contact'}/>
    </div>
  )
}

export default Tabs