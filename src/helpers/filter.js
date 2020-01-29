export function filterProjects (projects, year, location, category) {
  let filteredProjects = []

  if (!category) filteredProjects = projects
  else if (category === 'all') filteredProjects = projects
  else if (category === 'destacados') {
    filteredProjects = projects.filter(elem => {
      if (elem.featured === true) return elem
    })
  } else {
    filteredProjects = projects.filter(it => {
      return it.year.toLowerCase().includes(location)
    })
  }

  if (year) {
    filteredProjects = filteredProjects.filter(it => {
      return it.year.toLowerCase().includes(year)
    })
  }

  if (location) {
    filteredProjects = filteredProjects.filter(it => {
      return it.year.toLowerCase().includes(location)
    })
  }

  return filteredProjects
}
