import React from 'react'
import { useRouter } from 'next/router'
import { projects } from '../../utils/projects'
import Image from 'next/image'

const Project = () => {
    const router = useRouter()
    const { query } = router
    const project = projects.find(project=> project.title === query.project)
    if (!project) return null
  return (
    <div>
        <h1>{project.title}</h1>
        <Image src={project.source} alt={`${project.title} thumbnail`}/>
    </div>
  )
}

export default Project