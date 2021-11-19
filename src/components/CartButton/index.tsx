import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

export type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  hasText = false,
  size = 'small'
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const buttonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      aria-label={buttonText}
      size={size}
      onClick={() => {
        return isInCart(id) ? removeFromCart(id) : addToCart(id)
      }}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default CartButton
