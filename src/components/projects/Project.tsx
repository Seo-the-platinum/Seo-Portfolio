import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
type Project = {
    project:{
        source: StaticImageData;
        title: string;
    }
}
const Project = ({ project }: Project) => {
  return (
    <div className='flex flex-col'>
        <h3 className='dark:text-slate-300'>{`${project.title}`}</h3>
        <Image src={project.source} alt={`${project.title} thumbnail`}/>
    </div>
  )
}

export default Project