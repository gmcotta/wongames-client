import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  }
}

Mobile.args = {
  username: ''
}

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />

Desktop.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

Desktop.args = {
  username: ''
}
