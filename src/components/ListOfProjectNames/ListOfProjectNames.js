import React from 'react'
import { filterProjects } from '../../helpers/filter'

import { Context } from '../../Context'

export const ListOfProjectNames = ({ projects }) => {
  return (
    <Context.Consumer>
      {
        ({ year, location, category }) => {
          const allProjects = filterProjects(projects, year, location, category)

          return (
            <div>
              {
                allProjects.map(project => <p key={project.id}>{project.name}</p>)
              }
            </div>
          )
        }
      }
    </Context.Consumer>
  )
}
