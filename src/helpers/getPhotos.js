import DEFAULT_IMAGE from '../assets/logoB.svg'

export function getPhotos (project, numberOfPhotos) {
  let photos = [DEFAULT_IMAGE]

  if (project.photos) photos = project.photos.slice(0, numberOfPhotos)

  return photos
}
