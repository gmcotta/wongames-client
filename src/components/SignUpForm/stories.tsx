import { Story, Meta } from '@storybook/react'
import SignUpForm from '.'

export default {
  title: 'Form/SignUpForm',
  component: SignUpForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <SignUpForm />
  </div>
)
