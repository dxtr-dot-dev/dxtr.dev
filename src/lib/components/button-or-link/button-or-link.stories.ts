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

// color

export const ColorPrimary: Story = {
	args: { color: 'primary' }
};

export const ColorSecondary: Story = {
	args: { color: 'secondary' }
};

export const ColorTertiary: Story = {
	args: { color: 'tertiary' }
};

export const ColorPaper: Story = {
	args: { color: 'paper' }
};

export const ColorSuccess: Story = {
	args: { color: 'success' }
};

export const ColorInfo: Story = {
	args: { color: 'info' }
};

export const ColorWarn: Story = {
	args: { color: 'warn' }
};

export const ColorError: Story = {
	args: { color: 'error' }
};

export const ColorTransparent: Story = {
	args: { color: 'transparent' }
};

export const ColorBody: Story = {
	args: { color: 'body' }
};

// Hover color & effect

export const ColorPaperHoverInnerShadowPrimary: Story = {
	args: { color: 'paper', hoverColor: 'primary', hoverEffect: 'inner-shadow' }
};

export const HoverEffectNone: Story = {
	args: { hoverEffect: false }
};

// variant

export const VariantFilled: Story = {
	args: { variant: 'filled' }
};

export const VariantOutlined: Story = {
	args: { variant: 'outlined' }
};

// shape

export const ShapeSquared: Story = {
	args: { shape: 'squared' }
};

export const ShapeRounded: Story = {
	args: { shape: 'rounded' }
};

export const ShapeRoundeFull: Story = {
	args: { shape: 'rounded-full' }
};

// full width

export const FullWidth: Story = {
	args: { fullWidth: true }
};

// text transform

export const TextTransformCapitalize: Story = {
	args: { textTransform: 'capitalize' }
};

export const TextTransformUppercase: Story = {
	args: { textTransform: 'uppercase' }
};

export const TextTransformLowercase: Story = {
	args: { textTransform: 'lowercase' }
};
