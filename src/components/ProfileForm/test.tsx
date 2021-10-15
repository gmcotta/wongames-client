import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileForm />)
    expect(
      screen.getByRole('heading', { name: /ProfileForm/i })
    ).toBeInTheDocument()
  })
})
