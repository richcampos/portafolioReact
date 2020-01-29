import { useEffect, useState } from 'react'

export function fetchProjects () {
  const [projects, setProjects] = useState([])

  useEffect(function () {
    window.fetch('https://atxk.com/milenio/api/projects/format/json')
      .then(response => response.json())
      .then(projects => {
        setProjects(projects)
      })
  }, [])

  return projects
}
