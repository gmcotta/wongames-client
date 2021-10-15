import { Story, Meta } from '@storybook/react'
import OrdersList from '.'

export default {
  title: 'OrdersList',
  component: OrdersList
} as Meta

export const Default: Story = () => <OrdersList />
