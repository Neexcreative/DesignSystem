import type { Meta, StoryObj } from '@storybook/react-vite'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'NEEX/Components/Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    label: 'Premium',
    variant: 'default',
  },
}

export const Dark: Story = {
  args: {
    label: 'Dark',
    variant: 'dark',
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
}
