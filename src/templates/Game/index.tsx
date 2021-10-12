import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  coverSrc: string
}

const Game = ({ coverSrc }: GameTemplateProps) => (
  <Base>
    <S.Cover src={coverSrc} role="image" aria-label="Cover" />
  </Base>
)

export default Game
