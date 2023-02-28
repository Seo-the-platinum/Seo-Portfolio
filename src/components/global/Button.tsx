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
      <BsEye className='fill-sky-900 group-hover/button:fill-sky-500 dark:fill-teal-500 dark:group-hover/button:fill-green-400'color={'rgb(15 118 110'} size='2rem' style={{paddingRight: '.5rem',}}/>
      <p className='text-sky-900  group-hover/button:text-sky-500 dark:text-teal-500 dark:group-hover/button:text-green-400 pl-2' > See The Site</p>
    </Link>
  )
}

export default Button