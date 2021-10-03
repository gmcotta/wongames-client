import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero-img.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 199,99',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbonText: { type: 'string' }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbonText: '30% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
