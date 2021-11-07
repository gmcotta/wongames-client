import userEvent from '@testing-library/user-event'
import { signOut } from 'next-auth/client'

import { render, screen, waitFor } from 'utils/testUtils'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
jest.mock('next-auth/client', () => ({
  signOut: jest.fn().mockResolvedValue({
    url: '/'
  })
}))

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

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

  it('should call signOut', async () => {
    render(<UserDropdown username="Username" />)
    userEvent.click(screen.getByText(/username/i))
    userEvent.click(screen.getByRole('button', { name: /sign out/i }))
    await waitFor(() => {
      expect(signOut).toHaveBeenCalled()
    })
  })
})
