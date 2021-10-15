import { Story, Meta } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    activeLink: {
      options: ['/profile/me', '/profile/cards', '/profile/orders'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)

Default.args = {
  activeLink: '/profile/cards'
}
