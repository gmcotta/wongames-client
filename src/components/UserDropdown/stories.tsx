import { Story, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = () => (
  <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown username="Gustavo" />
  </div>
)
