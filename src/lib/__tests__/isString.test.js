import isString from '../isString'
describe('#isString', () => {
  it('should is variable string', () => {
    const test = 'test'
    expect(isString(test)).toBe(true)
  })

  it('should no string', () => {
    const boolTrue = true
    const boolFalse = false
    const number = 12
    expect(isString(boolTrue)).toBe(false)
    expect(isString(boolFalse)).toBe(false)
    expect(isString(number)).toBe(false)
  })
})
