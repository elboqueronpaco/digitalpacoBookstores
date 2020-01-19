import isFunction from '../isFunction'

describe('#isFunction', () => {
  it('should be true if variable is a function', () => {
    const sayHello = () => 'Hello'
    expect(isFunction(sayHello)).toBe(true)
  })

  it('should be false if a variable is not a function', () => {
    const sayHello = 'hello'
    expect(isFunction(sayHello)).toBe(false)
  })
})
