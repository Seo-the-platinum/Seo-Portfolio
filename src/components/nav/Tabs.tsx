import React from 'react'
import Tab from './Tab'

const Tabs = () => {
  return (
    <div className='grid grid-cols-3 absolute bottom-0 min-w-full'>
        <Tab/>
        <Tab/>
        <Tab/>
    </div>
  )
}

export default Tabs