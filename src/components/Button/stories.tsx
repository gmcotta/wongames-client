import { Story, Meta } from '@storybook/react'
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

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />
AsLink.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false,
  as: 'a',
  href: '/link'
}
