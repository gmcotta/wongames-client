import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import * as S from './styles'

export type GameTemplateProps = {
  coverSrc: string
  gameInfo: GameInfoProps
}

const Game = ({ coverSrc, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={coverSrc} role="image" aria-label="Cover" />
    <S.Wrapper>
      <S.GameInfoSection>
        <GameInfo {...gameInfo} />
      </S.GameInfoSection>
    </S.Wrapper>
  </Base>
)

export default Game
