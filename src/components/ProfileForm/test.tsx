import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileForm />)
    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/your current password/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
