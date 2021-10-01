import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the Ribbon text', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should render the Ribbon with primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the Ribbon with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render the Ribbon with normal size', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the Ribbon with normal size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
