import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/testUtils'

import CartButton from '.'

describe('<CartButton />', () => {
  it('should render the button to add item', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }
    render(<CartButton id="1" />, { cartProviderProps })
    const addButton = screen.getByLabelText(/add to cart/i)
    expect(addButton).toBeInTheDocument()
    userEvent.click(addButton)
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })

  it('should render the button to remove item', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<CartButton id="1" />, { cartProviderProps })
    const removeButton = screen.getByLabelText(/remove from cart/i)
    expect(removeButton).toBeInTheDocument()
    userEvent.click(screen.getByLabelText(/remove from cart/i))
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
