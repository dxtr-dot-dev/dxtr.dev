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
	const hoverEffectWithFallback = (() => {
		if (hoverEffect || !variant) return hoverEffect;
		if (variant === 'text') return 'text-color';
		return 'outer-shadow';
	})();

	const hoverColorWithFallback = (() => {
		if (hoverColor || !hoverEffect) return hoverColor;

		if (variant === 'text') return 'none';

		return `${color}-text`;
	})();

	const classes = [
		display && `aui-display--${display}`,
		hoverEffectWithFallback && `aui-hover-effect--${hoverEffectWithFallback}`,
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
		hoverColorWithFallback && `--aui-hover-color: var(--color-${hoverColorWithFallback});`
	];

	return {
		class: classes.filter(Boolean).join(' '),
		style: styles.filter(Boolean).join(';')
	};
}
