import { Story, Meta } from '@storybook/react'
import SignInForm from '.'

export default {
  title: 'SignInForm',
  component: SignInForm
} as Meta

export const Default: Story = () => <SignInForm />
