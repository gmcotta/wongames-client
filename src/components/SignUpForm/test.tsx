import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SignUpForm from '.'

describe('<SignUpForm />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<SignUpForm />)
    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument()
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
    renderWithTheme(<SignUpForm />)
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
