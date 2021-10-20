import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import itemsMock from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render the cart icon and the badge', () => {
    renderWithTheme(<CartDropdown items={itemsMock} total="$ 300.00" />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(itemsMock.length)).toBeInTheDocument()
  })

  it('should render the cart items and total', () => {
    renderWithTheme(<CartDropdown items={itemsMock} total="$ 300.00" />)
    expect(screen.getByText('$ 300.00')).toBeInTheDocument()
    expect(screen.getByText(/Red Dead Redemption 2/i)).toBeInTheDocument()
  })

  it('should render empty component if there are no items', () => {
    renderWithTheme(<CartDropdown items={[]} total="$ 300.00" />)
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
