import { Story, Meta } from '@storybook/react/types-6-0'
import items from './mock'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from '.'
import { CartContextData } from 'hooks/use-cart'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<
  GameCardProps[] & Pick<CartContextData, 'isInCart'>
> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)

Default.args = {
  isInCart: () => false
}
