import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  args: {
    label: 'Label',
    labelFor: 'check',
    labelColor: 'white',
    isChecked: false
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div>
    <div style={{ padding: '10px' }}>
      <Checkbox {...args} isChecked label="Action" labelFor="action" />
    </div>
    <div style={{ padding: '10px' }}>
      <Checkbox {...args} label="Adventure" labelFor="adventure" />
    </div>
    <div style={{ padding: '10px' }}>
      <Checkbox {...args} label="RPG" labelFor="rpg" />
    </div>
  </div>
)
