import React from 'react'
import { getProjectById } from '../../helpers/getProjectById'
import { getPhotos } from '../../helpers/getPhotos'
import { Container, Image, ProjectData } from './styles'
import Slider from 'react-slick'

export const ProjectPhotoCarrousel = ({ projects, id }) => {
  const project = getProjectById(projects, id)
  const photos = getPhotos(project, 5)
  const settings = {
    accessibility: false,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false
  }
  return (
    <Container>
      <Slider {...settings}>
        {
          photos.map(elem => {
            return (<div key='10'><Image backgroundImage={elem.middle1280} /></div>)
          })
        }
      </Slider>
      <div />
      <ProjectData>
        <h4>{project.name}</h4>
        <p>Superficie: {project.size}m<sup>2</sup></p>
        <p>Arquitecto: {project.architect}</p>
        <p>Project Manager: {project.pm}</p>
        <p>Locación: {project.location}</p>
        <p>Año: {project.year}</p>
      </ProjectData>
    </Container>
  )
}
