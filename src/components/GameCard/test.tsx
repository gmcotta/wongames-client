import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/population-zero-img.png',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the game card', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render only the default price', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(screen.getByText(/r\$ 235,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8F8F8F'
    })
    expect(screen.getByText(/r\$ 235,00/i)).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#3CD3C1'
    })
  })

  it('should render the promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)
    expect(screen.getByText(/r\$ 235,00/i)).toHaveStyle({
      'text-decoration': 'line-through',
      color: '#8F8F8F'
    })
    expect(screen.getByText(/r\$ 200,00/i)).toHaveStyle({
      color: '#FAFAFA',
      'background-color': '#3CD3C1'
    })
  })

  it('should render filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite icon is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })
})
