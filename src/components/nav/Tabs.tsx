import React from 'react'
import Link from 'next/link'
import Tab from './Tab'

const Tabs = () => {
  return (
    <div className='grid grid-cols-4 fixed dark:bg-[#05011a] bottom-0 min-w-full border-t border-black dark:border-white p-2'>
        <Link className='dark:text-teal-700 font-bold text-xl' href='/'> Home </Link>
        <Tab route={'projects'}/>
        <Tab route={'about'}/>
        <Tab route={'contacts'}/>
    </div>
  )
}

export default Tabs