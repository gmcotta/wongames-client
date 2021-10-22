import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { GetStaticProps } from 'next'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames }
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
  return {
    props: {
      banners: bannersMapped,
      newGames: newGamesMapped,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    },
    revalidate: 60
  }
}
