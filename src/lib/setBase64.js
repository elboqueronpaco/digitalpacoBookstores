import isObject from './isObject'
import isString from './isString'
export default (value) => {
  if (isObject(value)) {
    return Buffer.from(JSON.stringify(value).toString('base64'))
  } else if (isString(value)) {
    return Buffer.from(value).toString('base64')
  }
  return false
}
