import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

import { screen, render, waitFor } from 'utils/testUtils'

import { registerSuccessMock } from './mock'

import SignUpForm from '.'

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

describe('<SignUpForm />', () => {
  it('should render the form', () => {
    const { container } = render(
      <MockedProvider>
        <SignUpForm />
      </MockedProvider>
    )
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /sign up now/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should validate the form', async () => {
    render(
      <MockedProvider>
        <SignUpForm />
      </MockedProvider>
    )
    userEvent.click(
      screen.getByRole('button', {
        name: /sign up now/i
      })
    )
    expect(
      await screen.findAllByText(/is not allowed to be empty/i)
    ).toHaveLength(3)
    expect(await screen.findByText(/is required/i)).toBeInTheDocument()
  })

  it('should sign up properly', async () => {
    result = {
      url: '/test'
    }
    render(
      <MockedProvider mocks={[registerSuccessMock]} addTypename={false}>
        <SignUpForm />
      </MockedProvider>
    )
    userEvent.type(screen.getByPlaceholderText(/username/i), 'username')
    userEvent.type(screen.getByPlaceholderText(/email/i), 'test@email.com')
    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText('Confirm Password'), '123')
    userEvent.click(
      screen.getByRole('button', {
        name: /sign up now/i
      })
    )
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/test')
    })
  })
})
