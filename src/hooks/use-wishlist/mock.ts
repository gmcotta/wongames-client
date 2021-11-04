import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `Game ${id}`,
  slug: `slug-game-${id}`,
  price: 30.3,
  developers: [{ name: 'developer' }],
  cover: {
    url: `/game${id}.jpg`
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    variables: {
      identifier: 'email@email.com'
    },
    context: {
      session: {
        jwt: 'token'
      }
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: '1',
          games: [gameMock('1'), gameMock('2'), gameMock('3')]
        }
      ]
    }
  }
}

export const wishlistItemsMock = [
  {
    id: '1',
    title: `Game 1`,
    slug: `slug-game-1`,
    price: 30.3,
    developer: 'developer',
    img: 'http://localhost:1337/game1.jpg'
  },
  {
    id: '2',
    title: `Game 2`,
    slug: `slug-game-2`,
    price: 30.3,
    developer: 'developer',
    img: 'http://localhost:1337/game2.jpg'
  },
  {
    id: '3',
    title: `Game 3`,
    slug: `slug-game-3`,
    price: 30.3,
    developer: 'developer',
    img: 'http://localhost:1337/game3.jpg'
  }
]
