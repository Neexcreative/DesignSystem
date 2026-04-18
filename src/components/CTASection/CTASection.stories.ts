import type { Meta, StoryObj } from '@storybook/react-vite'
import CTASection from './CTASection'

const meta: Meta<typeof CTASection> = {
  title: 'NEEX/Patterns/CTASection',
  component: CTASection,
}

export default meta

type Story = StoryObj<typeof CTASection>

export const Default: Story = {
  args: {
    eyebrow: 'Next step',
    title: 'Ready to build something strong?',
    description:
      'Use this block as the final conversion section before contact or checkout.',
    primaryAction: 'Start a project',
    secondaryAction: 'See process',
  },
}