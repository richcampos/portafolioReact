export function getFormattedSize (size) {
  if (size !== undefined) {
    const sizeString = size.toString()
    const formatedSize = sizeString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return formatedSize
  }
}
