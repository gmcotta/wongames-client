import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  mostPopularTitle: string
  upcomingGamesTitle: string
  freeGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  freeGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  upcomingHighlight: HighlightProps
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  mostPopularTitle,
  upcomingGamesTitle,
  freeGamesTitle,
  newGames,
  mostPopularGames,
  upcomingGames,
  freeGames,
  mostPopularHighlight,
  upcomingHighlight,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.BannerSection>
        <BannerSlider items={banners} />
      </S.BannerSection>
    </Container>

    <S.NewsSection>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.NewsSection>

    <S.MostPopularSection>
      <Showcase
        title={mostPopularTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
    </S.MostPopularSection>

    <S.UpcomingSection>
      <Showcase
        title={upcomingGamesTitle}
        highlight={upcomingHighlight}
        games={upcomingGames}
      />
    </S.UpcomingSection>

    <S.FreeGamesSection>
      <Showcase
        title={freeGamesTitle}
        games={freeGames}
        highlight={freeHighlight}
      />
    </S.FreeGamesSection>
  </Base>
)

export default Home
