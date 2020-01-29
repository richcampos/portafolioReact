export function getProjectById (projects, id) {
  let project = {}

  projects.forEach(elem => {
    if (elem.id === id) project = elem
  })

  return project
}
