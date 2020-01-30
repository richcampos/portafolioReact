import React from 'react'
import { filterProjects } from '../../helpers/filter'
import { Container } from './styles'
import { Link } from '@reach/router'

import { Context } from '../../Context'

export const ListOfProjectNames = ({ projects, id }) => {
  return (
    <Context.Consumer>
      {
        ({ year, location, category }) => {
          const allProjects = filterProjects(projects, year, location, category)

          return (
            <Container>
              {
                allProjects.map(project => {
                  return (
                    <Link active={id} to={`/projects/${project.id}`} key={project.id}>
                      {project.name}
                    </Link>
                  )
                })
              }
            </Container>
          )
        }
      }
    </Context.Consumer>
  )
}
