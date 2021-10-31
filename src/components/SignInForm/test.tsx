import { screen, render } from 'utils/testUtils'

import SignInForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

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
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<SignInForm />)
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link for sign up', () => {
    render(<SignInForm />)
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
