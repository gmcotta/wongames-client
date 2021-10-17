import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the component', () => {
    renderWithTheme(<Dropdown title={'Title'}>Content</Dropdown>)
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should toggle the content', () => {
    renderWithTheme(<Dropdown title={'Title'}>Content</Dropdown>)
    const title = screen.getByText(/title/i)
    const content = screen.getByText(/content/i)
    expect(content).toHaveAttribute('aria-hidden', 'true')
    expect(content).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none'
    })
    userEvent.click(title)
    expect(content).toHaveAttribute('aria-hidden', 'false')
    expect(content).toHaveStyle({
      opacity: 1,
      'pointer-events': 'auto'
    })
    userEvent.click(title)
    expect(content).toHaveAttribute('aria-hidden', 'true')
    expect(content).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none'
    })
  })
})
