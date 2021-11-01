import { screen, render } from 'utils/testUtils'

import ForgotPasswordForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
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
})
