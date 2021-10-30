import { ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'
import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()
  return (
    <S.Wrapper>
      <ShoppingCart aria-label="Shopping cart" />
      {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
    </S.Wrapper>
  )
}

export default CartIcon
