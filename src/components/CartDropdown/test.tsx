import { render, screen } from 'utils/testUtils'

import itemsMock from 'components/CartList/mock'
import CartDropdown from '.'
import { CartContextDefaultValue } from 'hooks/use-cart'

const cartProviderProps = {
  ...CartContextDefaultValue,
  items: itemsMock,
  quantity: itemsMock.length,
  total: '$300.00'
}

describe('<CartDropdown />', () => {
  it('should render the cart icon and the badge', () => {
    render(<CartDropdown />, {
      cartProviderProps
    })
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(itemsMock.length)).toBeInTheDocument()
  })

  it('should render the cart items and total', () => {
    render(<CartDropdown />, {
      cartProviderProps
    })
    expect(screen.getByText('$300.00')).toBeInTheDocument()
    expect(screen.getByText(/Red Dead Redemption 2/i)).toBeInTheDocument()
  })

  it('should render empty component if there are no items', () => {
    render(<CartDropdown />)
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
