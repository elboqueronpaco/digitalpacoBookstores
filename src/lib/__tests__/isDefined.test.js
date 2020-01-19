import isDefined from '../isDefined'

describe('#isDefined', () => {
  it('should return true if a variable is defined', () => {
    const name = 'Paco'
    expect(isDefined(name)).toBe(true)
  })
  it('should return false if a variable is undefined', () => {
    let name
    expect(isDefined(name)).toBe(false)
  })
})
