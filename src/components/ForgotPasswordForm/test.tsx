import 'server.mock'
import userEvent from '@testing-library/user-event'
import { screen, render } from 'utils/testUtils'

import ForgotPasswordForm from '.'

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

describe('<ForgotPasswordForm />', () => {
  it('should render the form', () => {
    render(<ForgotPasswordForm />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /send email/i
      })
    ).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<ForgotPasswordForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'valid@email.com')
    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )
    expect(
      await screen.findByText(/Email sent! Please, check your inbox./i)
    ).toBeInTheDocument()
  })

  it('should show an invalid email message', async () => {
    render(<ForgotPasswordForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')
    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )
    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show a not registered email message', async () => {
    render(<ForgotPasswordForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'false@email.com')
    userEvent.click(
      screen.getByRole('button', {
        name: /send email/i
      })
    )
    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill the email input', () => {
    query = {
      email: 'valid@email.com'
    }
    render(<ForgotPasswordForm />)
    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
