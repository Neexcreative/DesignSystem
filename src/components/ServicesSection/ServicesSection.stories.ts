import type { Meta, StoryObj } from '@storybook/react-vite'
import ServicesSection from './ServicesSection'

const meta: Meta<typeof ServicesSection> = {
  title: 'NEEX/Patterns/ServicesSection',
  component: ServicesSection,
}

export default meta

type Story = StoryObj<typeof ServicesSection>

export const Default: Story = {
  args: {
    eyebrow: 'Services',
    title: 'What we do',
    description:
      'Core services presented in reusable card-based section blocks.',
  },
}