import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'NEEX/Components/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Book a Call',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'View Project',
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    label: 'Learn More',
    variant: 'ghost',
  },
}
