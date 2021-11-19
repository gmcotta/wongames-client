import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks/use-cart'
import GameInfo, { GameInfoProps } from '.'

import gameInfoMock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps & Pick<CartContextData, 'isInCart'>> =
  (args) => (
    <div style={{ maxWidth: '114rem', margin: '0 auto', padding: '1.6rem' }}>
      <GameInfo {...args} />
    </div>
  )
Default.args = {
  ...gameInfoMock,
  isInCart: () => false
}

export const IsInCart: Story<
  GameInfoProps & Pick<CartContextData, 'isInCart'>
> = (args) => (
  <div style={{ maxWidth: '114rem', margin: '0 auto', padding: '1.6rem' }}>
    <GameInfo {...args} />
  </div>
)
IsInCart.args = {
  ...gameInfoMock,
  isInCart: () => true
}
