import React from 'react'
import { HomeStyle } from '../styles/GlobalStyles'

import { GridOfProjects } from '../components/GridOfProjects/GridOfProjects'
import { FiltersBar } from '../components/FiltersBar/FiltersBar'

export const Home = () => {
  return (
    <HomeStyle>
      <div className='filters'>
        <FiltersBar />
      </div>
      <div className='grid'>
        <GridOfProjects />
      </div>
    </HomeStyle>
  )
}
