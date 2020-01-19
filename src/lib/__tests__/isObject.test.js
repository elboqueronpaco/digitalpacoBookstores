import isObject from '../isObject'
describe('#isObject', () => {
  it('should return if a variable is object', () => {
    const test = {
      foo: 'Foo'
    }
    expect(isObject(test)).toBe(true)
  })

  it('should return false if is no variable object', () => {
    const test = ['foo']
    expect(isObject(test)).toBe(false)
  })
})
