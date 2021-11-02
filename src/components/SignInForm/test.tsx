import userEvent from '@testing-library/user-event'
import { screen, render, waitFor } from 'utils/testUtils'

import SignInForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
const prefetch = jest.fn(() => Promise.resolve(true))
useRouter.mockImplementation(() => ({
  push,
  prefetch,
  query: '',
  asPath: '',
  route: '/'
}))

// eslint-disable-next-line @typescript-eslint/no-var-requires
const signIn = jest.spyOn(require('next-auth/client'), 'signIn')
let result = {}
signIn.mockImplementation(() => result)

describe('<SignInForm />', () => {
  it('should render the form', () => {
    const { container } = render(<SignInForm />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /sign in now/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should validate form', async () => {
    render(<SignInForm />)
    userEvent.click(
      screen.getByRole('button', {
        name: /sign in now/i
      })
    )
    expect(
      await screen.findAllByText(/is not allowed to be empty/i)
    ).toHaveLength(2)
  })

  it('should sign in properly', async () => {
    result = {
      url: '/test'
    }
    render(<SignInForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'test@email.com')
    userEvent.type(screen.getByPlaceholderText(/password/i), '123')
    userEvent.click(
      screen.getByRole('button', {
        name: /sign in now/i
      })
    )
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/test')
    })
  })

  it('should return sign in error message', async () => {
    result = {
      url: null
    }
    render(<SignInForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'error@email.com')
    userEvent.type(screen.getByPlaceholderText(/password/i), '123')
    userEvent.click(
      screen.getByRole('button', {
        name: /sign in now/i
      })
    )
    expect(await screen.findByText(/username or password is invalid/i))
  })
})
