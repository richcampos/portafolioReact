import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [year, setYear] = useState()
  const [location, setLocation] = useState()
  const [category, setCategory] = useState('destacados')

  const filters = {
    year,
    updateYear: value => {
      setYear(value)
    },
    location,
    updateLocation: value => {
      setLocation(value)
    },
    category,
    updateCategory: value => {
      setCategory(value)
    }
  }

  return (
    <Context.Provider value={filters}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
