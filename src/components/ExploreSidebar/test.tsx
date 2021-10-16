import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(
      screen.getByRole('heading', { name: /ExploreSidebar/i })
    ).toBeInTheDocument()
  })
})
