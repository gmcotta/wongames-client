import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import * as S from './styles'
import Gallery, { GalleryImageProps } from 'components/Gallery'

export type GameTemplateProps = {
  coverSrc: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
}

const Game = ({ coverSrc, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <S.Cover src={coverSrc} role="image" aria-label="Cover" />
    <S.Wrapper>
      <S.GameInfoSection>
        <GameInfo {...gameInfo} />
      </S.GameInfoSection>

      {!!gallery && (
        <S.GallerySection>
          <Gallery items={gallery} />
        </S.GallerySection>
      )}
    </S.Wrapper>
  </Base>
)

export default Game
