import { Story, Meta } from '@storybook/react'
import ProfileForm from '.'

export default {
  title: 'Form/ProfileForm',
  component: ProfileForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: '80rem', margin: '0 auto' }}>
    <ProfileForm />
  </div>
)
