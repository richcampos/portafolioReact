import React, { useEffect, useState } from 'react'
import { Grid } from './styles'

import { ProjectCard } from '../ProjectCard/ProjectCard'

function fetchProjects () {
  const [projects, setProjects] = useState([])

  useEffect(function () {
    window.fetch('https://atxk.com/milenio/api/projects/format/json')
      .then(response => response.json())
      .then(projects => {
        setProjects(projects)
      })
  }, [])

  return projects
}

export const GridOfProjects = () => {
  const projects = fetchProjects()

  return (
    <Grid>
      {
        projects.map(project => <ProjectCard key={project.id} {...project} />)
      }
    </Grid>
  )
}
