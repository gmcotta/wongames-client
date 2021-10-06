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
})
