import isNumber from '../isNumber'

describe('#isNumber', () => {
  it('should is number', () => {
    const positive = 2
    const cero = 0
    const negative = -3
    expect(isNumber(positive)).toBe(true)
    expect(isNumber(cero)).toBe(true)
    expect(isNumber(negative)).toBe(true)
  })
  it('should is not number', () => {
    const boolTrue = true
    const boolFalse = false
    const stringNumber = '-1'
    expect(isNumber(boolTrue)).toBe(false)
    expect(isNumber(boolFalse)).toBe(false)
    expect(isNumber(stringNumber)).toBe(false)
  })
})
