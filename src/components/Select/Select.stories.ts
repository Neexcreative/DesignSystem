import type { Meta, StoryObj } from '@storybook/react-vite'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'NEEX/Components/Select',
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Serviço',
    options: ['Branding', 'Website', 'Social Media', 'Video Editing'],
  },
}
