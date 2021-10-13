import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithDownloadLink: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)
WithDownloadLink.args = {
  downloadLink: 'https://wongames.com/game/39820809280283/download'
}
