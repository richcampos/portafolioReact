import React from 'react'
import { Link } from '@reach/router'
import { Bar } from './styles'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export const BackBar = () => {
  return (
    <Bar>
      <Link to='/'>
        <MdKeyboardArrowLeft />
        Portafolio
      </Link>
    </Bar>
  )
}
