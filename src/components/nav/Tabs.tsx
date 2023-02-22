import React from 'react'
import Tab from './Tab'

const Tabs = () => {
  return (
    <div className='grid grid-cols-3 fixed dark:bg-[#05011a] bottom-0 min-w-full border-t border-black dark:border-white p-2'>
        <Tab route={'projects'}/>
        <Tab route={'about'}/>
        <Tab route={'contact'}/>
    </div>
  )
}

export default Tabs