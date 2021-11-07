import { NextSeo } from 'next-seo'
import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import * as S from './styles'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'

export type GameTemplateProps = {
  slug: string
  coverSrc: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  coverSrc,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title={`${gameInfo.title} - Won Games`}
        description={gameInfo.description}
        canonical={`https://wongames.com.br/game/${slug}`}
        openGraph={{
          url: `https://wongames.com.br/game/${slug}`,
          title: `${gameInfo.title} - Won Games`,
          description: gameInfo.description,
          images: [
            {
              url: coverSrc,
              alt: gameInfo.title
            }
          ]
        }}
      />
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

        <S.DescriptionSection>
          <TextContent title="Description" content={description} />
        </S.DescriptionSection>

        <S.GameDetailsSection>
          <GameDetails {...details} />
          <Divider />
        </S.GameDetailsSection>

        <Showcase
          title={upcomingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />
        <Showcase title={recommendedTitle} games={recommendedGames} />
      </S.Wrapper>
    </Base>
  )
}

export default Game
