import isArray from '../isArray'

describe('#isArray', () => {
  it('should return true if is an Array', () => {
    expect(isArray([1, 2, 3])).toBe(true)
  })
  it('should return false if is not an Array', () => {
    expect(isArray({
      name: 'Paco',
      surname: 'Moreno'
    })).toBe(false)
  })
})
