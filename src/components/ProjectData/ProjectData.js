import React from 'react'
import { Container } from './styles'
import { getProjectById } from '../../helpers/getProjectById'
import { getFormattedSize } from '../../helpers/getFormattedSize'

export const ProjectData = ({ projects, id }) => {
  const { name, size, architect, year, pm, location } = getProjectById(projects, id)
  const formattedSize = getFormattedSize(size)

  return (
    <Container>
      <h4>{name}</h4>
      <p>Superficie: {formattedSize}m<sup>2</sup></p>
      <p>Arquitecto: {architect}</p>
      <p>Project Manager: {pm}</p>
      <p>Locación: {location}</p>
      <p>Año: {year}</p>
    </Container>
  )
}
