import React from 'react'
import { fetchProjects } from '../helpers/fetchProjects'
import { ListOfProjectNames } from '../components/ListOfProjectNames/ListOfProjectNames'
import { ProjectPhotoCarrousel } from '../components/ProjectPhotoCarrousel/ProjectPhotoCarrousel'
import { BackBar } from '../components/BackBar/BackBar'
import { ProjectData } from '../components/ProjectData/ProjectData'

export const DetailedProjects = ({ id }) => {
  const projects = fetchProjects()

  return (
    <div>
      <BackBar />
      <ListOfProjectNames projects={projects} id={id} />
      <ProjectPhotoCarrousel projects={projects} id={id} />
      <ProjectData projects={projects} id={id} />
    </div>
  )
}
