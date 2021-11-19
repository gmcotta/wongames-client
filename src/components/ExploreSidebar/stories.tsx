import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'
import sidebarMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: sidebarMock,
    initialValues: {
      free: true,
      sort_by: 'high-to-low',
      platforms: ['linux', 'macos'],
      rpg: true
    },
    onFilter: () => ({})
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ width: '300px' }}>
    <ExploreSidebar {...args} />
  </div>
)
