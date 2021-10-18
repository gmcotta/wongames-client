import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: cartListMock,
    total: 'R$ 430,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => <CartList {...args} />

export const HasFooterButton: Story<CartListProps> = (args) => (
  <CartList {...args} hasFooterButton />
)

export const Empty: Story<CartListProps> = () => (
  <CartList total="0" items={[]} />
)
