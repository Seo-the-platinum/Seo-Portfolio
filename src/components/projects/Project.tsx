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
    <Link className='flex flex-col min-w-full darK:hover:brightness-110 dark:bg-[#150726] bg-cyan-100 p-0.5' href={`/project/${project.title}`}>
        <h2 className='dark:text-slate-300 text-sky-900'>{`${project.title}`}</h2>
        <Image src={project.source} alt={`${project.title} thumbnail`}/>
    </Link>
  )
}

export default Project