import 'server.mock'
import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/client'
import { screen, render, waitFor } from 'utils/testUtils'

import ResetPasswordForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
let query = {}
useRouter.mockImplementation(() => ({
  push,
  query,
  asPath: '',
  route: '/'
}))

// eslint-disable-next-line @typescript-eslint/no-var-requires
jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<ResetPasswordForm />', () => {
  it('should render the form', () => {
    render(<ResetPasswordForm />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /reset password/i
      })
    ).toBeInTheDocument()
  })

  it('should validate password', async () => {
    render(<ResetPasswordForm />)
    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText('Confirm Password'), '321')
    userEvent.click(
      screen.getByRole('button', {
        name: /reset password/i
      })
    )
    expect(
      await screen.findByText(/confirm password does not match with password/i)
    )
  })

  it('should show invalid code message', async () => {
    query = {
      code: 'invalid'
    }
    render(<ResetPasswordForm />)
    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText('Confirm Password'), '123')
    userEvent.click(
      screen.getByRole('button', {
        name: /reset password/i
      })
    )
    expect(await screen.findByText(/incorrect code provided/i))
  })

  it('should reset password and call signIn', async () => {
    query = {
      code: 'valid'
    }
    render(<ResetPasswordForm />)
    userEvent.type(screen.getByPlaceholderText('Password'), '1234')
    userEvent.type(screen.getByPlaceholderText('Confirm Password'), '1234')
    userEvent.click(
      screen.getByRole('button', {
        name: /reset password/i
      })
    )
    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '1234',
        callbackUrl: '/'
      })
    })
  })
})
