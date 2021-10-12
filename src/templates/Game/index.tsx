import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import * as S from './styles'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

export type GameTemplateProps = {
  coverSrc: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
}

const Game = ({
  coverSrc,
  gameInfo,
  gallery,
  description,
  details
}: GameTemplateProps) => (
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

      {!!description && (
        <S.DescriptionSection>
          <TextContent title="Description" content={description} />
        </S.DescriptionSection>
      )}

      {!!details && (
        <S.GameDetailsSection>
          <GameDetails {...details} />
        </S.GameDetailsSection>
      )}
    </S.Wrapper>
  </Base>
)

export default Game
