import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails from '.'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails />)

    expect(
      screen.queryByRole('heading', { name: /games details/i })
    ).not.toBeInTheDocument()
  })
})
