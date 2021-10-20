import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Borderland 3',
  description: 'game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render the game info', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)
    expect(
      screen.getByRole('heading', { name: /borderland 3/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/210.00/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wish list/i })
    ).toBeInTheDocument()
  })
})
