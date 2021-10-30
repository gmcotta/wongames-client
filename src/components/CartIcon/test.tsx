import { CartContextDefaultValue } from 'hooks/use-cart'
import { screen, render } from 'utils/testUtils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the component without cart items', () => {
    render(<CartIcon />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the component without cart items when quantity is negative', () => {
    render(<CartIcon />, {
      cartProviderProps: {
        ...CartContextDefaultValue,
        quantity: -1
      }
    })
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the component with cart items', () => {
    render(<CartIcon />, {
      cartProviderProps: {
        ...CartContextDefaultValue,
        quantity: 10
      }
    })
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/10/)).toBeInTheDocument()
  })
})
