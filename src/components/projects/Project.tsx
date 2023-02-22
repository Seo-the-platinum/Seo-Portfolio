import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

type Project = {
    project:{
        source: StaticImageData;
        title: string;
    }
}
const Project = ({ project }: Project) => {
  return (
    <Link className='flex flex-col min-w-full' href='/project'>
        <h3 className='dark:text-slate-300'>{`${project.title}`}</h3>
        <Image src={project.source} alt={`${project.title} thumbnail`}/>
    </Link>
  )
}

export default Project