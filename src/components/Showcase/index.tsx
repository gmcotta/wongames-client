import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!games && <GameCardSlider items={games} color={color} />}
    {!!highlight && <Highlight {...highlight} />}
  </S.Wrapper>
)

export default Showcase
