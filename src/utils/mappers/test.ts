import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return correctly', () => {
    const banner = {
      image: {
        url: '/image.png',
        __typename: 'UploadFile'
      },
      title: 'Title',
      subtitle: 'Subtitle',
      button: {
        label: 'button label',
        link: 'button link',
        __typename: 'ComponentPageButton'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small',
        __typename: 'ComponentPageRibbon'
      },
      __typename: 'Banner'
    } as QueryHome_banners
    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.png',
        title: 'Title',
        subtitle: 'Subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbonText: 'ribbon text',
        ribbonSize: 'small',
        ribbonColor: 'primary'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if it has no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })
  it('should return correctly', () => {
    const game = {
      __typename: 'Game',
      id: '1',
      name: 'Game',
      slug: 'game',
      developers: [
        {
          __typename: 'Developer',
          name: 'developer'
        }
      ],
      cover: {
        __typename: 'UploadFile',
        url: '/cover.png'
      },
      price: 10
    } as QueryGames_games
    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game',
        slug: 'game',
        developer: 'developer',
        img: `http://localhost:1337/cover.png`,
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return an empty array if it has no games', () => {
    expect(highlightMapper(null)).toStrictEqual([])
  })
  it('should return correctly', () => {
    const highlight = {
      __typename: 'ComponentPageHighlight',
      title: 'Title',
      subtitle: 'Subtitle',
      background: {
        __typename: 'UploadFile',
        url: '/background.png'
      },
      floatImage: {
        __typename: 'UploadFile',
        url: 'float/png'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      contentAlignment: 'right'
    } as QueryHome_sections_freeGames_highlight
    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Title',
      subtitle: 'Subtitle',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      backgroundImage: `http://localhost:1337/background.png`,
      floatImage: `http://localhost:1337float/png`,
      contentAlignment: 'right'
    })
  })
})
