import React from 'react'
import { useRouter } from 'next/router'
import { projects } from '../../utils/projects'
import Image from 'next/image'
import { BsGithub } from "react-icons/bs";

const Project = () => {
    const router = useRouter()
    const { query } = router
    const project = projects.find(project=> project.title === query.project)
    if (!project) return null
  return (
    <div>
        <h1>{project.title}</h1>
        <Image src={project.source} alt={`${project.title} thumbnail`}/>
        <a href='https://github.com/Seo-the-platinum/marcelos-portfolio'>
          <BsGithub size='2rem' color='purple'/>
        </a>
    </div>
  )
}

export default Project