import Button from '.'
import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { renderWithTheme } from 'utils/tests/helpers'

describe('<Button />', () => {
  it('should render the button with medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '1rem 3.2rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button with small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the button with large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '1.2rem 5.2rem'
    })
  })

  it('should render the button with full width', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the minimal version of the button', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Wishlist
      </Button>
    )
    expect(screen.getByRole('button', { name: /wishlist/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })
    expect(screen.getByRole('button', { name: /wishlist/i })).toHaveStyleRule(
      'background',
      'none',
      { modifier: ':hover' }
    )
    expect(screen.getByRole('button', { name: /wishlist/i })).toHaveStyleRule(
      'filter',
      'brightness(0.9)',
      { modifier: ':hover' }
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
