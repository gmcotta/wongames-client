import { Story, Meta } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    quantity: 10
  }
} as Meta

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />
