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
  <S.Wrapper
    backgroundImage={backgroundImage}
    contentAlignment={contentAlignment}
  >
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
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
