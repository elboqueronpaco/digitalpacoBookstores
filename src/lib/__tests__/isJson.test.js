import isJson from '../isJson'

describe('#isJson', () => {
  it('should be true if a variable is a valid json', () => {
    const test = JSON.stringify({
      foo: {
        bar: true
      }
    })
    expect(isJson(test)).toBe(true)
  })
  it('should be false if a variable is not a valid json', () => {
    const test = 'bar'
    expect(isJson(null)).toBe(false)
    expect(isJson(test)).toBe(false)
  })
})
