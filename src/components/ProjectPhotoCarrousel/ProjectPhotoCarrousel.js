/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { getProjectById } from '../../helpers/getProjectById'
import { getPhotos } from '../../helpers/getPhotos'
import { Container, Image, Default } from './styles'

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
    infinite: false,
    arrows: false
  }
  return (
    <Container>
      {
        photos.length > 1
          ? <Slider {...settings}>
            {
              photos.map(elem => {
                return (<div key='10'><Image backgroundImage={elem.middle1280} /></div>)
              })
            }
          </Slider>
          : <Default backgroundImage={photos[0]} />
      }

      <div />
    </Container>
  )
}
