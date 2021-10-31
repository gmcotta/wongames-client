import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Username" />)
    expect(screen.getByText(/username/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Username" />)
    userEvent.click(screen.getByText(/username/i))
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
