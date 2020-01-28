import React from 'react'

import { GridOfProjects } from '../components/GridOfProjects/GridOfProjects'
import { FiltersBar } from '../components/FiltersBar/FiltersBar'

export const Home = () => {
  return (
    <div>
      <FiltersBar />
      <GridOfProjects />
    </div>
  )
}
