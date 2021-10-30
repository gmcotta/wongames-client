import { screen, render } from 'utils/testUtils'

import cartListMock from './mock'
import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(
      <CartList items={[cartListMock[0]]} total="$ 430.00" />
    )
    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/\$ 430.00/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the footer button', () => {
    render(
      <CartList items={[cartListMock[0]]} total="$ 430.00" hasFooterButton />
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })
})
