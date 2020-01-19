import createavatar from '../createavatar'

describe('#createavatar', () => {
  it('should string of avatar', () => {
    expect(createavatar('elboqueronpaco@gmail.com')).toBe('4743142f77dcbd6a7ec60ba209943b12')
  })
})
