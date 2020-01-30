import DEFAULT_IMAGE from '../assets/logo.svg'

export function getPhotos (project, numberOfPhotos) {
  let photos = [DEFAULT_IMAGE]

  if (project.photos && project.photos.length > 0) photos = project.photos.slice(0, numberOfPhotos)

  return photos
}
