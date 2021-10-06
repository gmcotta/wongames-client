import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', '')
    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })
})
