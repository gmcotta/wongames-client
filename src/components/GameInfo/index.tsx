import { FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/formatPrice'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <Button size="large" minimal icon={<FavoriteBorder />}>
        Wish list
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
