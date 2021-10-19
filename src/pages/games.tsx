import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import sidebarMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { gql } from '@apollo/client'

export default function Game(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query getGames {
        games {
          name
          slug
          cover {
            url
          }
          developers {
            name
          }
          price
        }
      }
    `
  })
  type GameProps = {
    name: string
    slug: string
    cover: {
      url: string
    }
    developers: {
      name: string
    }[]
    price: number
  }
  return {
    props: {
      games: data.games.map((game: GameProps) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: sidebarMock
    },
    revalidate: 60
  }
}
