import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
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
  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
