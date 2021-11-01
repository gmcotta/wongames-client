import { Story, Meta } from '@storybook/react'
import ForgotPasswordForm from '.'

export default {
  title: 'Form/ForgotPasswordForm',
  component: ForgotPasswordForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <ForgotPasswordForm />
  </div>
)
