import { screen, render } from 'utils/testUtils'

import Base from '.'

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

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
  it('should render the template', () => {
    render(<Base>Content</Base>)
    const menu = screen.getByTestId(/menu mock/i)
    expect(menu).toBeInTheDocument()
    const footerHeading = screen.getByTestId(/footer mock/i)
    expect(footerHeading).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })
})
