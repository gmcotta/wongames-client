import Image from 'next/image'
import Button from 'components/Button'
import * as S from './styles'

export type ContentAlignmentProps = 'left' | 'right'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  contentAlignment?: ContentAlignmentProps
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  contentAlignment = 'right'
}: HighlightProps) => (
  <S.Wrapper contentAlignment={contentAlignment} data-cy="highlight">
    <Image src={backgroundImage} alt={`${title}-background`} layout="fill" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image
          src={floatImage}
          alt={`${title}-float`}
          width={400}
          height={300}
        />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
