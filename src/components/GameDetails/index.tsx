import { Windows, Linux, Apple } from 'styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type PlatformOptions = 'windows' | 'linux' | 'mac'
type RatingOptions = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'
export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: PlatformOptions[]
  publisher: string
  rating: RatingOptions
  genres: string[]
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" size={18} />,
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }

  function formatReleaseDate(releaseDate: string) {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(releaseDate))
  }

  function formatGenres(genres: string[]) {
    const capitalizedGenres = genres.map(
      (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
    )
    return capitalizedGenres.join(' / ')
  }

  function formatRating(rating: string) {
    const ratingWithNumberAndPlusSign = rating.replace(/BR(.*)/, '$1+')
    return rating === 'BR0' ? 'FREE' : ratingWithNumberAndPlusSign
  }

  return (
    <S.Wrapper data-cy="game-details">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formatReleaseDate(releaseDate)}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: PlatformOptions) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formatRating(rating)}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{formatGenres(genres)}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
