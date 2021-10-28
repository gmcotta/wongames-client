import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const TODAY_DATE = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY_DATE
    },
    fetchPolicy: 'no-cache'
  })
  const popularGames = sections?.popularGames?.games
  const popularHighlight = sections?.popularGames?.highlight
  const upcomingHighlight = sections?.upcomingGames?.highlight
  const freeGamesHighlight = sections?.freeGames?.highlight
  return {
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularGames: gamesMapper(popularGames),
      mostPopularHighlight: highlightMapper(popularHighlight),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGamesTitle: sections?.freeGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      freeGames: gamesMapper(freeGames),
      upcomingHighlight: highlightMapper(upcomingHighlight),
      freeHighlight: highlightMapper(freeGamesHighlight)
    },
    revalidate: 60
  }
}
