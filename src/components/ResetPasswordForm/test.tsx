import { screen, render } from 'utils/testUtils'

import ResetPasswordForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
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
})
