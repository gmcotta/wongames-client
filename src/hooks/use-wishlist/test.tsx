import { ReactNode } from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'

import { WishlistProvider, useWishlist } from '.'
import { wishlistItemsMock, wishlistMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'token', user: { email: 'email@email.com' } }
useSession.mockImplementation(() => [session])

describe('useWishlist()', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <MockedProvider mocks={[wishlistMock]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }
    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.items).toStrictEqual(wishlistItemsMock)
  })

  it('should check if games are in wishlist or not', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <MockedProvider mocks={[wishlistMock]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }
    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    await waitForNextUpdate()
    expect(result.current.isInWishlist('1')).toBe(true)
    expect(result.current.isInWishlist('4')).toBe(false)
  })
})
