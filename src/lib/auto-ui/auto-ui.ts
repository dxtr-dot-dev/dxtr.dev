import type {
	AutoUIColor,
	AutoUIDisplay,
	AutoUIHoverEffect,
	AutoUIJustify,
	AutoUIShape,
	AutoUISize,
	AutoUITextTransform,
	AutoUITransition,
	AutoUIVariant,
	AutoUIWidth
} from './auto-ui-types';

type AutoUIArgs = {
	color?: AutoUIColor;
	display?: AutoUIDisplay;
	hoverEffect?: AutoUIHoverEffect;
	hoverColor?: AutoUIColor;
	justify?: AutoUIJustify;
	shape?: AutoUIShape;
	size?: AutoUISize;
	gap?: AutoUISize;
	textTransform?: AutoUITextTransform;
	transition?: AutoUITransition;
	variant?: AutoUIVariant;
	width?: AutoUIWidth;
};

export function autoUI({
	color,
	display,
	hoverEffect,
	hoverColor,
	justify,
	shape,
	size,
	gap,
	textTransform,
	transition,
	variant,
	width
}: AutoUIArgs) {
	const classes = [
		display && `aui-display--${display}`,
		hoverEffect && `aui-hover-effect--${hoverEffect}`,
		justify && `aui-justify--${justify}`,
		shape && `aui-shape--${shape}`,
		size && `aui-size--${size}`,
		gap && `aui-gap--${gap}`,
		textTransform && `aui-text-transform--${textTransform}`,
		transition && `aui-transition--${transition}`,
		variant && `aui-variant--${variant}`,
		width && `aui-width--${width}`
	];

	const styles = [
		color && `--aui-color: var(--color-${color});`,
		color && `--aui-color-text: var(--color-${color}-text);`,
		hoverColor && `--aui-hover-color: var(--color-${hoverColor});`
	];

	return {
		class: classes.filter(Boolean).join(' '),
		style: styles.filter(Boolean).join(';')
	};
}
