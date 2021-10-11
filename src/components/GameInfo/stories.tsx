import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />

Default.args = {
  title: 'Borderland 3',
  description:
    'Agora é a hora de eliminar Handsome Jack. Reúna seus amigos para correr desenfreadamente pelo mundo coletando milhões de itens.',
  price: '215.00'
}
