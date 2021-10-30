import { Story, Meta } from '@storybook/react'
import CartList from '.'
import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValues: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => <CartList {...args} />
Default.args = {
  total: '$330.00',
  cartContextValues: { items: cartListMock }
}

export const HasFooterButton: Story = (args) => (
  <CartList {...args} hasFooterButton />
)
HasFooterButton.args = {
  total: '$330.00',
  cartContextValues: { items: cartListMock }
}

export const Empty: Story = () => <CartList />
Empty.args = {
  total: '$330.00',
  cartContextValues: { items: [] }
}
