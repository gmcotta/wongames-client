import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'

export function bannerMapper(banners: QueryHome_banners[]) {
  return banners.map((banner) => ({
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
}

export function gamesMapper(games: QueryGames_games[] | null | undefined) {
  return games?.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price
  }))
}

export function highlightMapper(
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      contentAlignment: highlight.contentAlignment
    }
  )
}
