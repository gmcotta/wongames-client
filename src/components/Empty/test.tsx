import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty, { EmptyProps } from '.'

const props: EmptyProps = {
  title: 'Title',
  description: 'Description'
}

describe('<Empty />', () => {
  it('should render the empty component', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)
    expect(
      screen.getByRole('img', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render the link', () => {
    renderWithTheme(<Empty {...props} />)
    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
