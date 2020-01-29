import React from 'react'
import { fetchProjects } from '../helpers/fetchProjects'
import { ListOfProjectNames } from '../components/ListOfProjectNames/ListOfProjectNames'
import { ProjectPhotoCarrousel } from '../components/ProjectPhotoCarrousel/ProjectPhotoCarrousel'

export const DetailedProjects = ({ id }) => {
  const projects = fetchProjects()

  return (
    <div>
      <ListOfProjectNames projects={projects} />
      <ProjectPhotoCarrousel projects={projects} id={id} />
    </div>
  )
}
