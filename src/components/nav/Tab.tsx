import React from 'react'
import Link from 'next/link'

type Route ={
    route: string
}
const Tab = ({ route }: Route) => {
  return (
    <div className='text-center'>
        <Link className='text-sky-900 dark:text-emerald-500 font-bold md:text-xl' href={`/#${route}`} scroll={false}>
            { `${route.slice(0,1).toUpperCase()}${route.slice(1)}` }
        </Link>
    </div>
  )
}

export default Tab