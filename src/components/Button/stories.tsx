import { Story, Meta } from '@storybook/react'
import { FavoriteBorder } from '@styled-icons/material-outlined'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />
WithIcon.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false,
  icon: <AddShoppingCart />
}

export const Minimal: Story<ButtonProps> = (args) => <Button {...args} />
Minimal.args = {
  children: 'Wishlist',
  size: 'medium',
  fullWidth: false,
  minimal: true,
  icon: <FavoriteBorder />
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />
AsLink.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false,
  as: 'a',
  href: '/link'
}
