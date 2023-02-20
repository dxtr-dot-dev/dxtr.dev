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
		`auto-ui-display--${display}`,
		`auto-ui-hover-effect--${hoverEffectWithFallback}`,
		`auto-ui-justify--${justify}`,
		`auto-ui-shape--${shape}`,
		`auto-ui-size--${size}`,
		`auto-ui-text-transform--${textTransform}`,
		`auto-ui-transition--${transition}`,
		`auto-ui-variant--${variant}`,
		`auto-ui-width--${width}`
	];

	const styles = [
		`--auto-ui-color: var(--color-${color});`,
		`--auto-ui-color-text: var(--color-${color}-text);`,
		`--auto-ui-hover-color: var(--color-${hoverColorWithFallback});`
	];

	return {
		class: classes.filter(Boolean).join(' '),
		style: styles.filter(Boolean).join(';')
	};
}
