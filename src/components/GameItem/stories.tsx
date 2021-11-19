import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Red Dead Redemption 2',
    price: '$ 215.00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPaymentInfo: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)
WithPaymentInfo.args = {
  downloadLink: 'https://wongames.com/game/39820809280283/download',
  paymentInfo: {
    number: '**** **** **** 1234',
    flag: 'mastercard',
    img: '/img/master-card.png',
    purchaseDate: 'Purchase made in 13/10/2021 at 20:30'
  }
}
