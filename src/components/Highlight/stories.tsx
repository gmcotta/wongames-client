import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: "Come and see John's new adventures",
    buttonLabel: 'Buy now',
    buttonlink: '/rdr2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
