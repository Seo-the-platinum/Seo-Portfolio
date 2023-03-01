import React from 'react'
import { BsEye } from 'react-icons/bs'
import Link from 'next/link'

type Route ={
  route: string
}

const Button = ({ route }: Route) => {
  return (
    <Link className='divide-x-2 dark:divide-slate-300 group/button
    bg-yellow-200
    hover:bg-yellow-300
    divide-sky-900
      rounded dark:bg-violet-900
    dark:hover:bg-violet-800 hover:scale-110 
      transition-scale duration-500 flex items-center p-1
    dark:active:bg-violet-700' href={route}>
      <BsEye className='fill-sky-900 group-hover/button:fill-sky-600 dark:fill-emerald-500 dark:group-hover/button:fill-emerald-400 pr-1'size='2rem'/>
      <p className='text-sky-900  group-hover/button:text-sky-600 dark:text-emerald-500 dark:group-hover/button:text-emerald-400 pl-2' > See The Site</p>
    </Link>
  )
}

export default Button