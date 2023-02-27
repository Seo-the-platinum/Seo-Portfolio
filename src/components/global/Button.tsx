import React from 'react'
import { BsEye } from 'react-icons/bs'
import Link from 'next/link'

type Route ={
  route: string
}

const Button = ({ route }: Route) => {
  return (
    <div className='divide-x-2 dark:divide-slate-300
    rounded bg-violet-900
     hover:bg-violet-800 hover:scale-110 
     transition-scale duration-500 flex items-center p-2
      active:bg-violet-800'>
      <BsEye color={'rgb(20 184 166)'} size='2rem' style={{paddingRight: '.5rem',}}/>
      <Link className='text-teal-500 pl-2' href={route}> See The Site</Link>
    </div>
  )
}

export default Button