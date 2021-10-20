import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'

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

export default function Index(props: GameTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null
  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await initializeApollo().query<
    QueryGames,
    QueryGamesVariables
  >({
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
  const { data } = await initializeApollo().query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })
  if (!data.games.length) {
    return {
      notFound: true
    }
  }
  const game = data.games[0]
  const props = {
    coverSrc: `http://localhost:1337${game.cover?.src}`,
    gameInfo: {
      title: game.name,
      description: game.short_description,
      price: new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(game.price)
    },
    gallery: game.gallery.map((image) => ({
      src: `http://localhost:1337${image.src}`,
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
    }
  }
  return {
    revalidate: 60,
    props
  }
}
