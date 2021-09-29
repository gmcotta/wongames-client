import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => <Menu />

Default.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  }
}
