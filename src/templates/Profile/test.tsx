import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Base mock">{children}</div>
    }
  }
})

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="ProfileMenu mock"></div>
    }
  }
})

describe('<Profile />', () => {
  it('should render the template', () => {
    renderWithTheme(<Profile>Content</Profile>)
    expect(screen.getByTestId(/base mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/profilemenu mock/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()
  })
})
