import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the component', () => {
    render(<Dropdown title={'Title'}>Content</Dropdown>)
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should toggle the content', () => {
    render(<Dropdown title={'Title'}>Content</Dropdown>)
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
  it('should toggle the content when closing on overlay', () => {
    render(<Dropdown title={'Title'}>Content</Dropdown>)
    const title = screen.getByText(/title/i)
    const content = screen.getByText(/content/i)
    const overlay = content.nextElementSibling
    userEvent.click(title)
    expect(overlay).toHaveAttribute('aria-hidden', 'false')
    expect(overlay).toHaveStyle({
      opacity: 1
    })
    userEvent.click(overlay!)
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none'
    })
  })
})
