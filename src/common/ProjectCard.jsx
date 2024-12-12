import React from 'react'

function ProjectCard({ src, link, projectTitle, projectInfo}) {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${projectTitle} logo`}/>
        <h3>{projectTitle}</h3>
        <p>{projectInfo}</p>
    </a>
  )
}

export default ProjectCard