import { screen, render } from 'utils/testUtils'

import items from './mock'
import CartList from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'

let cartProviderProps = {
  ...CartContextDefaultValues,
  items,
  total: '$430.00'
}

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(<CartList />, { cartProviderProps })
    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/\$430.00/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the footer button', () => {
    render(<CartList hasFooterButton />, { cartProviderProps })
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })

  it('should render the loading', () => {
    cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: '$430.00',
      loading: true
    }
    render(<CartList />, { cartProviderProps })
    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })

  it('should render Empty component', () => {
    render(<CartList />)
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/buy now/i)).not.toBeInTheDocument()
  })
})
