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
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.BannerSection>
        <BannerSlider items={banners} />
      </S.BannerSection>
    </Container>

    <S.NewsSection>
      <Showcase title="New games" games={newGames} color="black" />
    </S.NewsSection>

    <S.MostPopularSection>
      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
    </S.MostPopularSection>

    <S.UpcomingSection>
      <Showcase
        title="Upcoming"
        highlight={upcomingHighlight}
        games={upcomingGames}
      />
    </S.UpcomingSection>

    <S.FreeGamesSection>
      <Showcase
        title="Free Games"
        games={freeGames}
        highlight={freeHighlight}
      />
    </S.FreeGamesSection>
  </Base>
)

export default Home
