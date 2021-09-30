import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer with 4 columns', () => {
    const { container } = renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /nos acompanhe/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /localização/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
