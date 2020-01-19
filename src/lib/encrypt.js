import crypto from 'crypto'
import setBase64 from './setBase64'
export default (secret, str) => crypto
  .createHash('sha1')
  .update(`${setBase64(secret)}${str.toString()}`)
  .digest('hex')
