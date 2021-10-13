import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartList />)

    expect(
      screen.getByRole('heading', { name: /CartList/i })
    ).toBeInTheDocument()
  })
})
