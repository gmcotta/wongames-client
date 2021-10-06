import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with the label', () => {
    renderWithTheme(<Radio label="Radio" labelFor="radio" value="anyValue" />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: '#030517' })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })
})
