import 'session.mock'
import { render, screen } from 'utils/testUtils'

import GameCard from '.'

const props = {
  id: '1',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/population-zero-img.png',
  price: 235,
  slug: 'population-zero'
}

describe('<GameCard />', () => {
  it('should render the game card', () => {
    const { container } = render(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    expect(screen.getByText(/\$235.00/)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render only the default price', () => {
    render(<GameCard {...props} />)
    expect(screen.getByText(/\$235.00/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8F8F8F'
    })
    expect(screen.getByText(/\$235.00/i)).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#3CD3C1'
    })
  })
  it('should render the promotional price', () => {
    render(<GameCard {...props} promotionalPrice={200} />)
    expect(screen.getByText(/\$235.00/i)).toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8F8F8F'
    })
    expect(screen.getByText(/\$200.00/i)).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#3CD3C1'
    })
  })

  it('should render the game card with ribbon', () => {
    render(
      <GameCard
        ribbonText="My Ribbon"
        ribbonSize="small"
        ribbonColor="primary"
        {...props}
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      'background-color': '#F231A5'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
