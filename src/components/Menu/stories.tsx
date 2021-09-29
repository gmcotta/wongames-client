import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  }
}

Default.args = {
  username: 'Gustavo'
}
