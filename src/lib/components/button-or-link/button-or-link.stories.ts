import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonOrLink from './button-or-link.svelte';

const meta = {
	title: 'components/ButtonOrLink',
	component: ButtonOrLink,
	args: {
		storybookSlot: 'Click me'
	}
} satisfies Meta<ButtonOrLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
