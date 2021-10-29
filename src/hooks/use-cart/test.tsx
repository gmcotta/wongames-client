import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { useCart, CartProvider, CartProviderProps } from '.'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return items and its info if there any of them in the cart', () => {
    setStorageItem('cartItems', ['1', '2'])
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )
    const { result } = renderHook(() => useCart(), { wrapper })
    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
