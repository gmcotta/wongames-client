import { screen, render } from 'utils/testUtils'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the Ribbon text', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should render the Ribbon with primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the Ribbon with secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render the Ribbon with normal size', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the Ribbon with normal size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
