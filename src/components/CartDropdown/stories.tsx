import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import itemsMock from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
Default.args = {
  cartContextValues: {
    items: itemsMock,
    quantity: itemsMock.length
  },
  total: '$300.00'
}

export const Empty: Story = (args) => (
  <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
