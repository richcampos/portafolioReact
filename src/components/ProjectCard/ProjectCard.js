import React from 'react'

import DEFAULT_IMAGE from '../../assets/logoB.svg'

export const ProjectCard = ({ photos, path = '#', name = '?' }) => {
  return (
    <a to={path}>
      <div className='overlay' />
      {
        photos.length > 0
          ? <img src={photos[0].small640} />
          : <img src={DEFAULT_IMAGE} />
      }
      <div className='bg-gray'>
        <p className='white'>{name}</p>
      </div>
    </a>
  )
}
