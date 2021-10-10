import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
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
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
      <S.BannerSection>
        <BannerSlider items={banners} />
      </S.BannerSection>
    </Container>

    <S.NewsSection>
      <Showcase title="News" games={newGames} />
    </S.NewsSection>

    <S.MostPopularSection>
      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
    </S.MostPopularSection>

    <S.UpcomingSection>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.UpcomingSection>

    <S.FreeGamesSection>
      <Showcase
        title="Free Games"
        games={freeGames}
        highlight={freeHighlight}
      />
    </S.FreeGamesSection>

    <S.FooterSection>
      <Container>
        <Footer />
      </Container>
    </S.FooterSection>
  </S.Wrapper>
)

export default Home
