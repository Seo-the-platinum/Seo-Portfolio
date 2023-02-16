import React from 'react'
import Link from 'next/link'

type Route ={
    route: string
}
const Tab = ({ route }: Route) => {
  return (
    <div className='text-center'>
        <Link className='dark:text-teal-700 font-bold text-xl' href={`#${route}`}>
            { `${route.slice(0,1).toUpperCase()}${route.slice(1)}` }
        </Link>
    </div>
  )
}

export default Tab