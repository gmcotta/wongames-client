import { ReactNode } from 'react'
import Image from 'next/image'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbonText?: ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbonText = '',
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}
    <S.ImageWrapper>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.ImageWrapper>
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
