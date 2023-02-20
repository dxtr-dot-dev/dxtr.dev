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
} from './aui-types';

type AutoUIArgs = {
	color?: AutoUIColor;
	display?: AutoUIDisplay;
	hoverEffect?: AutoUIHoverEffect;
	hoverColor?: AutoUIColor;
	justify: AutoUIJustify;
	shape?: AutoUIShape;
	size?: AutoUISize;
	textTransform?: AutoUITextTransform;
	transition?: AutoUITransition;
	variant?: AutoUIVariant;
	width?: AutoUIWidth;
};

export function autoUI({
	color = 'primary',
	display = 'inline-flex',
	hoverEffect,
	hoverColor,
	justify = 'left',
	shape = 'rounded',
	size = 'md',
	textTransform = 'none',
	transition,
	variant = 'fill',
	width = 'auto'
}: AutoUIArgs) {
	const hoverEffectWithFallback = (() => {
		if (hoverEffect) return hoverEffect;
		if (variant === 'text') return 'text-color';
		return 'outer-shadow';
	})();

	const hoverColorWithFallback = (() => {
		if (hoverColor) return hoverColor;

		if (variant === 'text') return 'none';

		return `${color}-text`;
	})();

	const classes = [
		`aui-display--${display}`,
		`aui-hover-effect--${hoverEffectWithFallback}`,
		`aui-justify--${justify}`,
		`aui-shape--${shape}`,
		`aui-size--${size}`,
		`aui-text-transform--${textTransform}`,
		`aui-transition--${transition}`,
		`aui-variant--${variant}`,
		`aui-width--${width}`
	];

	const styles = [
		`--aui-color: var(--color-${color});`,
		`--aui-color-text: var(--color-${color}-text);`,
		`--aui-hover-color: var(--color-${hoverColorWithFallback});`
	];

	return {
		class: classes.filter(Boolean).join(' '),
		style: styles.filter(Boolean).join(';')
	};
}
