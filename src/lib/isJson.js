export default (str) => {
  if (!str || str === null) {
    return false
  }
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
