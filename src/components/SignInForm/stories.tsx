import { Story, Meta } from '@storybook/react'
import SignInForm from '.'

export default {
  title: 'Form/SignInForm',
  component: SignInForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <SignInForm />
  </div>
)
