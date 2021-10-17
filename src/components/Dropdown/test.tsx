import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the component', () => {
    renderWithTheme(<Dropdown title={'Title'}>Content</Dropdown>)
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })
})
