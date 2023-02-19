import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button.svelte';

const meta = {
	title: 'Example/Button',
	component: Button,
	args: {
		storybookSlot: 'Click me'
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {}
};
