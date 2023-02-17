import React from 'react'
import { BsEye } from 'react-icons/bs'
import Link from 'next/link'

type Route ={
  route: string
}

const Button = ({ route }: Route) => {
  return (
    <div className='divide-x-2 dark:divide-slate-300 rounded bg-indigo-800 hover:bg-indigo-700 hover:scale-110 transition-scale duration-500 flex items-center p-2 active:bg-violet-700'>
      <BsEye color={'#0d9489'} size='2rem' style={{paddingRight: '.5rem'}}/>
      <Link className='text-slate-300 pl-2' href={`#${route}`}>See my work</Link>
    </div>
  )
}

export default Button