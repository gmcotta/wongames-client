import { screen, render } from 'utils/testUtils'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Subtitle 1',
  buttonLabel: 'Buy Now',
  buttonLink: '/game1',
  backgroundImage: '/img/red-dead-img.png',
  floatImage: '/img/red-dead-float.png'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    render(<Highlight {...props} />)
    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle 1/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    render(<Highlight {...props} />)
    expect(
      screen.getByRole('img', { name: /Heading 1-background/i })
    ).toHaveAttribute('src', props.backgroundImage)
  })

  it('should render the float image', () => {
    render(<Highlight {...props} />)
    expect(
      screen.getByRole('img', { name: /Heading 1-float/i })
    ).toHaveAttribute('src', props.floatImage)
  })

  it('should render content with right alignment by default', () => {
    const { container } = render(
      <Highlight {...props} floatImage={props.floatImage} />
    )
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render content with left alignment', () => {
    const { container } = render(
      <Highlight
        {...props}
        floatImage={props.floatImage}
        contentAlignment="left"
      />
    )
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
    expect(container.firstChild).toHaveStyleRule('justify-self', 'end', {
      modifier: `${S.FloatImageWrapper}`
    })
  })
})
