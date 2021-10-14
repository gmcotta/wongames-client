import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps, PaymentInfoProps } from '.'

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

  it('should render the game item with download link', () => {
    const downloadLink = 'https://game.download.com'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the game item with payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      number: '**** **** **** 1234',
      flag: 'mastercard',
      img: '/img/flags/mastercard',
      purchaseDate: 'Purchase made in 13/10/2021 at 20:30'
    }
    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)
    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})