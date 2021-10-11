import { Story, Meta } from '@storybook/react'
import Gallery, { GalleryProps } from '.'

import mock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: mock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
