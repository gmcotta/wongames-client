import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SignInForm />)

    expect(
      screen.getByRole('heading', { name: /SignInForm/i })
    ).toBeInTheDocument()
  })
})
