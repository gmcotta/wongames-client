import { render, screen } from 'utils/testUtils'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import WishlistButton from '.'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react-hooks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'token', user: { email: 'email@email.com' } }
useSession.mockImplementation(() => [session])

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }
    render(<WishlistButton id="1" />, { wishlistProviderProps })
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }
    render(<WishlistButton id="1" />, { wishlistProviderProps })
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })
    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })
    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render with user is not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
    useSession.mockImplementationOnce(() => [null])
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })
    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', () => {
    const addToWishlist = jest.fn()
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })
    act(() => {
      userEvent.click(screen.getByText(/add to wishlist/i))
    })
    expect(addToWishlist).toHaveBeenCalledWith('1')
  })

  it('should remove from wishlist', () => {
    const removeFromWishlist = jest.fn()
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist
    }
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })
    act(() => {
      userEvent.click(screen.getByText(/remove from wishlist/i))
    })
    expect(removeFromWishlist).toHaveBeenCalledWith('1')
  })
})
