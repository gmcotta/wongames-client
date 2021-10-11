import { Story, Meta } from '@storybook/react'
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

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '114rem', margin: '0 auto', padding: '1.6rem' }}>
    <GameInfo {...args} />
  </div>
)

Default.args = gameInfoMock
