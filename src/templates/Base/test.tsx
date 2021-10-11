import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu mock"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Footer mock"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Base>Content</Base>)
    const menu = screen.getByTestId(/menu mock/i)
    expect(menu).toBeInTheDocument()
    const footerHeading = screen.getByTestId(/footer mock/i)
    expect(footerHeading).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })
})
