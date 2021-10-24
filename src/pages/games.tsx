import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import sidebarMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Game(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15
    }
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: sidebarMock
    },
    revalidate: 60
  }
}
