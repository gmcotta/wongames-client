import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })
  const bannersMapped = banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbonText: banner.ribbon.text,
      ribbonSize: banner.ribbon.size,
      ribbonColor: banner.ribbon.color
    })
  }))
  const newGamesMapped = newGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price
  }))
  const popularGamesMapped = sections?.popularGames?.games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price
  }))
  const popularHighlight = sections?.popularGames?.highlight
  const popularHighlightMapped = {
    title: popularHighlight?.title,
    subtitle: popularHighlight?.subtitle,
    buttonLabel: popularHighlight?.buttonLabel,
    buttonLink: popularHighlight?.buttonLink,
    backgroundImage: `http://localhost:1337${popularHighlight?.background?.url}`,
    floatImage: `http://localhost:1337${popularHighlight?.floatImage?.url}`,
    contentAlignment: popularHighlight?.contentAlignment
  }
  const upcomingGamesMapped = upcomingGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price
  }))
  const freeGamesMapped = freeGames.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price
  }))
  const upcomingHighlight = sections?.upcomingGames?.highlight
  const upcomingHighlightMapped = {
    title: upcomingHighlight?.title,
    subtitle: upcomingHighlight?.subtitle,
    buttonLabel: upcomingHighlight?.buttonLabel,
    buttonLink: upcomingHighlight?.buttonLink,
    backgroundImage: `http://localhost:1337${upcomingHighlight?.background?.url}`,
    floatImage: `http://localhost:1337${upcomingHighlight?.floatImage?.url}`,
    contentAlignment: upcomingHighlight?.contentAlignment
  }
  const freeGamesHighlight = sections?.freeGames?.highlight
  const freeGamesHighlightMapped = {
    title: freeGamesHighlight?.title,
    subtitle: freeGamesHighlight?.subtitle,
    buttonLabel: freeGamesHighlight?.buttonLabel,
    buttonLink: freeGamesHighlight?.buttonLink,
    backgroundImage: `http://localhost:1337${freeGamesHighlight?.background?.url}`,
    floatImage: `http://localhost:1337${freeGamesHighlight?.floatImage?.url}`,
    contentAlignment: freeGamesHighlight?.contentAlignment
  }
  return {
    props: {
      banners: bannersMapped,
      newGames: newGamesMapped,
      mostPopularHighlight: popularHighlightMapped,
      mostPopularGames: popularGamesMapped,
      upcomingGames: upcomingGamesMapped,
      upcomingHighlight: upcomingHighlightMapped,
      freeGames: freeGamesMapped,
      freeHighlight: freeGamesHighlightMapped
    },
    revalidate: 60
  }
}
