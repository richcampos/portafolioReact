import React from 'react'
import { Link, Image, Overlay, TextBar } from './styles'

import DEFAULT_IMAGE from '../../assets/logoB.svg'

export const ProjectCard = ({ photos, id = '#', name = '?', year = '?' }) => {
  return (
    <Link to={`/projects/${id}`}>
      <Overlay className='overlay' />
      {
        photos.length > 0
          ? <Image src={photos[0].small640} />
          : <Image src={DEFAULT_IMAGE} />
      }
      <TextBar className='bg-gray'>
        <p className='white'>{name} | {year}</p>
      </TextBar>
    </Link>
  )
}
