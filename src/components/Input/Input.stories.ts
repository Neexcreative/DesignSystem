import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'NEEX/Components/Input',
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Type here',
  },
}
