import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react'

import { useQueryGames } from 'graphql/queries/games'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}
export type CartContextData = {
  items: CartItem[] | undefined
}
export type CartProviderProps = {
  children: ReactNode
}

export const CartContextDefaultValue = { items: [] }
export const CartContext = createContext<CartContextData>(
  CartContextDefaultValue
)
const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])
  useEffect(() => {
    const data = getStorageItem(CART_KEY)
    if (data) {
      setCartItems(data)
    }
  }, [])
  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: { where: { id: cartItems } }
  })

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
