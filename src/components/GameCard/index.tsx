import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import formatPrice from 'utils/formatPrice'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import * as S from './styles'

export type GameCardProps = {
  id: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbonText?: ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
  slug: string
}

const GameCard = ({
  id,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbonText = '',
  ribbonSize = 'normal',
  ribbonColor = 'primary',
  slug
}: GameCardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
