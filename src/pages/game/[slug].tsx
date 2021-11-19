import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { getImageUrl } from 'utils/getImageUrl'

import {
  QueryGames,
  QueryGamesVariables,
  QueryGames_games
} from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

export default function Index(props: GameTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null
  return <Game {...props} />
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })
  const paths = data.games.map(({ slug }: QueryGames_games) => ({
    params: { slug }
  }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    },
    fetchPolicy: 'no-cache'
  })
  if (!data.games.length) {
    return {
      notFound: true
    }
  }
  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  const TODAY_DATE = new Date().toISOString().slice(0, 10)
  const {
    data: { upcomingGames, sections }
  } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY_DATE
    }
  })
  const game = data.games[0]
  const props = {
    slug: params?.slug,
    coverSrc: `${getImageUrl(game.cover?.src)}`,
    gameInfo: {
      id: game.id,
      title: game.name,
      description: game.short_description,
      price: game.price
    },
    gallery: game.gallery.map((image) => ({
      src: getImageUrl(image.src),
      label: image.label
    })),
    description: game.description,
    details: {
      developer: game.developers[0].name,
      releaseDate: game.release_date,
      platforms: game.platforms.map((platform) => platform.name),
      publisher: game.publisher?.name,
      rating: game.rating,
      genres: game.categories.map((category) => category.name)
    },
    recommendedTitle: recommendedData.recommended?.section?.title,
    recommendedGames: gamesMapper(recommendedData.recommended?.section?.games),
    upcomingTitle: sections?.upcomingGames?.title,
    upcomingGames: gamesMapper(upcomingGames),
    upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight)
  }
  return {
    revalidate: 60,
    props
  }
}
