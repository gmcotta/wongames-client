import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Subtitle 1',
  buttonLabel: 'Buy Now',
  buttonLink: '/game1',
  backgroundImage: '/img/red-dead-img.jpeg',
  floatImage: '/img/red-dead-float.png'
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

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyle({
      'background-image': `url(${props.backgroundImage})`
    })
  })

  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} floatImage={props.floatImage} />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.floatImage
    )
  })
})
