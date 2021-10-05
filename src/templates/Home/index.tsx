import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import CardGameSlider from 'components/CardGameSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'

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
  <section>
    <Container>
      <Menu />
      <S.BannerSection>
        <BannerSlider items={banners} />
      </S.BannerSection>
    </Container>

    <S.NewsSection>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <CardGameSlider items={newGames} color="black" />
      </Container>
    </S.NewsSection>

    <S.MostPopularSection>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <CardGameSlider items={mostPopularGames} />
      </Container>
    </S.MostPopularSection>

    <S.UpcomingSection>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
        <CardGameSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <CardGameSlider items={upcomingMoreGames} />
      </Container>
    </S.UpcomingSection>

    <S.FreeGamesSection>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <CardGameSlider items={freeGames} />
        <Highlight {...freeHighlight} />
      </Container>
    </S.FreeGamesSection>

    <S.FooterSection>
      <Container>
        <Footer />
      </Container>
    </S.FooterSection>
  </section>
)

export default Home
