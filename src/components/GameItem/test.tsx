import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { screen, render } from 'utils/testUtils'

import GameItem, { GameItemProps, PaymentInfoProps } from '.'

const props: GameItemProps = {
  id: '1',
  img: 'img.jpg',
  title: 'Title',
  price: '$ 215.00'
}

describe('<GameItem />', () => {
  it('should render the game item', () => {
    render(<GameItem {...props} />)
    expect(screen.getByRole('img', { name: /title/i })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/\$ 215.00/i)).toBeInTheDocument()
  })

  it('should remove the game item from cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })
    userEvent.click(screen.getByText(/remove/i))
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })

  it('should render the game item with download link', () => {
    const downloadLink = 'https://game.download.com'
    render(<GameItem {...props} downloadLink={downloadLink} />)
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the game item with payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      number: '**** **** **** 1234',
      flag: 'mastercard',
      img: '/img/flags/mastercard',
      purchaseDate: 'Purchase made in Oct 13, 2021'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)
    expect(screen.getByRole('img', { name: /mastercard/ })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render the game item for a free game', () => {
    const paymentInfo: PaymentInfoProps = {
      number: 'Free Game',
      flag: null,
      img: null,
      purchaseDate: 'Purchase made in Oct 13, 2021'
    }
    render(<GameItem {...props} paymentInfo={paymentInfo} />)
    expect(screen.getByText(/free game/i)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
