import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { useCart, CartProvider, CartProviderProps } from '.'
import { cartItems, gamesMock } from './mock'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return items and its info if there any of them in the cart', async () => {
    setStorageItem('cartItems', ['1', '2'])
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )
    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })
    await waitForNextUpdate()
    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toStrictEqual(2)
    expect(result.current.total).toStrictEqual('$21.00')
  })

  it('should check if item is already in cart', () => {
    setStorageItem('cartItems', ['1'])
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )
    const { result } = renderHook(() => useCart(), {
      wrapper
    })
    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })
})
