import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    label: 'Label',
    labelFor: 'check',
    labelColor: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => <Radio {...args} />
