import { ShoppingCart } from '@styled-icons/material-outlined'
import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    <ShoppingCart aria-label="Shopping cart" />
    {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
  </S.Wrapper>
)

export default CartIcon
