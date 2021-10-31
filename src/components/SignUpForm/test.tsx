import { MockedProvider } from '@apollo/client/testing'
import { screen, render } from 'utils/testUtils'

import SignUpForm from '.'

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
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the text and link for sign in', () => {
    render(
      <MockedProvider>
        <SignUpForm />
      </MockedProvider>
    )
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
