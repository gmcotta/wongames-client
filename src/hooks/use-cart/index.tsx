import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react'

import { useQueryGames } from 'graphql/queries/games'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'
import formatPrice from 'utils/formatPrice'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}
export type CartContextData = {
  items: CartItem[] | undefined
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
}
export type CartProviderProps = {
  children: ReactNode
}

export const CartContextDefaultValue = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null
}
export const CartContext = createContext<CartContextData>(
  CartContextDefaultValue
)
const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>(
    CartContextDefaultValue.items
  )
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
  const total = data?.games.reduce((acc, game) => {
    return acc + game.price
  }, 0)
  const isInCart = (id: string) => {
    return id ? cartItems.includes(id) : false
  }
  const addToCart = (id: string) => {
    const newItems = [...cartItems, id]
    setCartItems(newItems)
    setStorageItem(CART_KEY, newItems)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
