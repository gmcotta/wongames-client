import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Subtitle 1',
  buttonLabel: 'Buy Now',
  buttonLink: '/game1'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...props} />)
    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle 1/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
