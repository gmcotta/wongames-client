import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardsList />)

    expect(
      screen.getByRole('heading', { name: /CardsList/i })
    ).toBeInTheDocument()
  })
})
