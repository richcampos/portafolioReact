import React from 'react'
import { Grid } from './styles'
import { filterProjects } from '../../helpers/filter'
import { fetchProjects } from '../../helpers/fetchProjects'

import { Context } from '../../Context'
import { ProjectCard } from '../ProjectCard/ProjectCard'

export const GridOfProjects = () => {
  const allProjects = fetchProjects()

  return (
    <Context.Consumer>
      {
        ({ year, location, category }) => {
          const projects = filterProjects(allProjects, year, location, category)

          return (
            <Grid>
              {
                projects.map(project => <ProjectCard key={project.id} {...project} />)
              }
            </Grid>
          )
        }
      }
    </Context.Consumer>
  )
}
