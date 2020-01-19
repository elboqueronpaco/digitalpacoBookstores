import isDefined from './isDefined'
import isArray from './isArray'

export default (variable) => isDefined(variable) && typeof variable === 'object' && !isArray(variable)
