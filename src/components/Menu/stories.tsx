import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
Mobile.args = {
  username: ''
}

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />
Desktop.args = {
  username: ''
}

export const MobileWithUsername: Story<MenuProps> = (args) => <Menu {...args} />
MobileWithUsername.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
MobileWithUsername.args = {
  username: 'Gustavo'
}

export const DesktopWithUsername: Story<MenuProps> = (args) => (
  <Menu {...args} />
)
DesktopWithUsername.args = {
  username: 'Gustavo'
}
