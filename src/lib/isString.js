import isDefined from './isDefined'
export default (variable) => isDefined(variable) && typeof variable === 'string'
