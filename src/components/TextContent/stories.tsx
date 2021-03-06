import { Story, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import mock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <TextContent {...args} />
  </div>
)
