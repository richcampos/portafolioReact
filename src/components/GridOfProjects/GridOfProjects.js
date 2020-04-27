/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'
import { Grid, Texto } from './styles'
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
            <Fragment>
              <Texto>
                {
                  projects.length > 0
                    ? <p>Proyectos: {projects.length}</p>
                    : <p>No hay proyectos que coincidan con los filtros seleccionados, modifique los filtros para poder ver mas proyectos</p>
                }
              </Texto>
              <Grid>
                {
                  projects.map(project => <ProjectCard key={project.id} {...project} />)
                }
              </Grid>
            </Fragment>
          )
        }
      }
    </Context.Consumer>
  )
}
