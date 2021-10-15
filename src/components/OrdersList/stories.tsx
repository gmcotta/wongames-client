import { Story, Meta } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'
import ordersMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: ordersMock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <OrdersList {...args} />
  </div>
)

export const WithNoOrders: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <OrdersList {...args} />
  </div>
)
WithNoOrders.args = {
  items: []
}
