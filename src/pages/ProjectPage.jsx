import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonGithub from './../components/buttonGithub/ButtonGithub'
import { projects } from './../helpers/projectsList'

export default function ProjectPage() {

  const { id } = useParams()
  const project = projects[id];

  return (
    <div>
        <main className="section">
          <div className="container">
              <div className="project-details">

                  <h1 className="title-1">{project.title}</h1>

                  <img src={project.imgBig} alt="projects" className="project-details__cover" />

                  <div className="project-details__desc">
                      <p>Skills: {project.skills}</p>
                  </div>

                  {project.gitHunLink && (<ButtonGithub link={project.gitHunLink} />)}

              </div>
         </div>
        </main>
    </div>
  )
}
