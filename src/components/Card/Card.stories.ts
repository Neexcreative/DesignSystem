import type { Meta, StoryObj } from '@storybook/react-vite'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'NEEX/Components/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    eyebrow: 'Brand System',
    title: 'Consistent visual language',
    description:
      'Use this card for services, features, testimonials, and key content blocks across the system.',
  },
}

export const Service: Story = {
  args: {
    eyebrow: 'Service',
    title: 'Content Creation',
    description:
      'Short-form videos and premium visual assets built to improve visibility and brand perception.',
  },
}
