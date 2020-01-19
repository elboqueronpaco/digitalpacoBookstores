import isString from './isString'
import isJson from './isJson'
export default (value) => {
  let buffer = false
  if (isString(value)) {
    buffer = Buffer.from(value, 'base64').toString('ascii')
  }
  if (isJson(buffer)) {
    buffer = JSON.parse(Buffer.from(value, 'base64').toString('ascii'))
  }
  return buffer
}
