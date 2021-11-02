import userEvent from '@testing-library/user-event'
import { signOut } from 'next-auth/client'

import { screen, render, waitFor } from 'utils/testUtils'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
jest.mock('next-auth/client', () => ({
  signOut: jest.fn()
}))

describe('<ProfileMenu />', () => {
  it('should render the component', () => {
    render(<ProfileMenu />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })

  it('should render the menu with an active link', () => {
    render(<ProfileMenu activeLink="/profile/me" />)
    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#F231A5'
    })
  })

  it('should call signOut', async () => {
    render(<ProfileMenu />)
    userEvent.click(screen.getByRole('button', { name: /sign out/i }))
    await waitFor(() => {
      expect(signOut).toHaveBeenCalled()
    })
  })
})
