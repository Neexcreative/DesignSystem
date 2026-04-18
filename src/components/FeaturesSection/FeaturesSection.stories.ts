import type { Meta, StoryObj } from '@storybook/react-vite'
import FeaturesSection from './FeaturesSection'

const meta: Meta<typeof FeaturesSection> = {
  title: 'NEEX/Patterns/FeaturesSection',
  component: FeaturesSection,
}

export default meta

type Story = StoryObj<typeof FeaturesSection>

export const Default: Story = {
  args: {
    eyebrow: 'Features',
    title: 'Why this system matters',
    description:
      'Reusable sections that help build faster, cleaner and more premium pages.',
    items: [
      {
        eyebrow: 'Strategy',
        title: 'Clear positioning',
        description:
          'Build a brand presence with direction, consistency and visual clarity.',
      },
      {
        eyebrow: 'Design',
        title: 'Premium visual system',
        description:
          'Reusable assets, modern layout and a polished design language.',
      },
      {
        eyebrow: 'Speed',
        title: 'Faster production',
        description:
          'Create pages and content faster using reusable design system blocks.',
      },
    ],
  },
}