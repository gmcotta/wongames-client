import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField id="field" />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField id="field" placeholder="example" />)

    expect(screen.getByPlaceholderText(/example/i)).toBeInTheDocument()
  })
})
