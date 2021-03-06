import { render, screen } from 'utils/testUtils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with white text', () => {
    render(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the heading with black text', () => {
    render(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render the heading with line on the left side', () => {
    render(
      <Heading color="black" lineLeft lineColor="secondary">
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render the heading with line at the bottom', () => {
    render(
      <Heading color="black" lineBottom>
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      { modifier: '::after' }
    )
  })

  it('should render the heading with a small size', () => {
    render(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      { modifier: '::after' }
    )
  })

  it('should render the heading with a huge size', () => {
    render(<Heading size="huge">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render the heading with the secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
