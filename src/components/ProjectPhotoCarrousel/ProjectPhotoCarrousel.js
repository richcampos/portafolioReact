import React from 'react'
import { getProjectById } from '../../helpers/getProjectById'
import DEFAULT_IMAGE from '../../assets/logoB.svg'
import { Context } from '../../Context'

// const Carousel = require('react-responsive-carousel')
export const ProjectPhotoCarrousel = ({ projects, id }) => {
  return (
    <Context.Consumer>
      {
        () => {
          const project = getProjectById(projects, id)
          console.log(project.photos)

          return (
            !project.photos
              ? <img src={DEFAULT_IMAGE} />
              : project.photos.map(elem => <img key='10' src={elem.middle1280} />)
          )
        }
      }
    </Context.Consumer>
  )
}
