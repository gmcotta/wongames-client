import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  color: 'white',
  size: 'normal',
  hideLabelOnMobile: false
}
