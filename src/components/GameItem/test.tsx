import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from '.'

const props: GameItemProps = {
  img: 'img.jpg',
  title: 'Title',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the game item', () => {
    renderWithTheme(<GameItem {...props} />)
    expect(screen.getByRole('img', { name: /title/i })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/r\$ 215,00/i)).toBeInTheDocument()
  })
})
