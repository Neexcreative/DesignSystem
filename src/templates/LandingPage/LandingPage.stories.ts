import type { Meta, StoryObj } from '@storybook/react-vite'
import LandingPage from './LandingPage'

const meta: Meta<typeof LandingPage> = {
  title: 'NEEX/Templates/LandingPage',
  component: LandingPage,
}

export default meta

type Story = StoryObj<typeof LandingPage>

export const Default: Story = {}