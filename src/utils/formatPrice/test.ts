import formatPrice from '.'

describe('formatPrice()', () => {
  it('should return FREE if price is 0', () => {
    expect(formatPrice(0)).toStrictEqual('FREE')
  })
  it('should return $10.99 if price is 10.99', () => {
    expect(formatPrice(10.99)).toStrictEqual('$10.99')
  })
})
