import type { Meta, StoryObj } from '@storybook/react-vite'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'NEEX/Patterns/Hero',
  component: Hero,
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    eyebrow: 'NEEX DESIGN SYSTEM',
    title: 'Sistema visual premium para a marca',
    description:
      'Uma base reutilizável para websites, apresentações e social media.',
    primaryAction: 'Começar projeto',
    secondaryAction: 'Ver componentes',
  },
}