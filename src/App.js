import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'

import { NavBar } from './components/NavBar/NavBar'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path='/' />
      </Router>
      <NavBar />
    </div>
  )
}
