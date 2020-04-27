/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'
import { Link, Overlay, TextBar } from './styles'

import DEFAULT_IMAGE from '../../assets/images/logoB.svg'

export const ProjectCard = ({ photos, id = '#', name = '?', year = '?' }) => {
  let hasPhoto
  if (photos.length > 0) hasPhoto = true

  return (
    <Fragment>
      {
        hasPhoto
          ? <Link to={`/projects/${id}`} image={photos[0].small640}>
            <Overlay className='overlay' />
            <TextBar className='bg-gray'>
              <p className='white'>{name} | {year}</p>
            </TextBar>
          </Link>
          : <Link className='default' to={`/projects/${id}`} image={DEFAULT_IMAGE}>
            <Overlay className='overlay' />
            <TextBar className='bg-gray'>
              <p className='white'>{name} | {year}</p>
            </TextBar>
          </Link>
      }
    </Fragment>
  )
}
