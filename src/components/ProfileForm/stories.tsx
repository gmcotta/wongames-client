import { Story, Meta } from '@storybook/react'
import ProfileForm from '.'

export default {
  title: 'ProfileForm',
  component: ProfileForm
} as Meta

export const Default: Story = () => <ProfileForm />
