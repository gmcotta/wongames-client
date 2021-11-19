import {
  FilterItemProps,
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from '.'

const filterItems: FilterItemProps[] = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'mac'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse query string to where format', () => {
    const parseQuery = parseQueryStringToWhere({ queryString, filterItems })
    expect(parseQuery).toStrictEqual({
      price_lte: 100,
      platforms: { name_contains: ['windows', 'mac'] },
      developers: { name_contains: 'Rockstar Games' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse query string to filter format', () => {
    const parseQuery = parseQueryStringToFilter({ queryString, filterItems })
    expect(parseQuery).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'mac'],
      developers: ['Rockstar Games'],
      sort: 'price:asc'
    })
  })
})
