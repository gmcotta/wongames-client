import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OrdersList />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
  })
})
