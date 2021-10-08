import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<SignInForm />)
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
    renderWithTheme(<SignInForm />)
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link for sign up', () => {
    renderWithTheme(<SignInForm />)
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
