const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: 'rgb(var(--color-primary), <alpha-value>)',
			secondary: 'rgb(var(--color-secondary), <alpha-value>)',
			tertiary: 'rgb(var(--color-tertiary), <alpha-value>)',
			background: 'rgb(var(--color-background), <alpha-value>)',
			paper: 'rgb(var(--color-paper), <alpha-value>)',
			body: 'rgb(var(--color-body), <alpha-value>)',
			'body-contrast': 'rgb(var(--color-body-contrast), <alpha-value>)',
			success: 'rgb(var(--color-success), <alpha-value>)',
			info: 'rgb(var(--color-info), <alpha-value>)',
			warn: 'rgb(var(--color-warn), <alpha-value>)',
			error: 'rgb(var(--color-error), <alpha-value>)'
		},
		fontFamily: {
			heading: ['Mokoto', 'sans-serif'],
			subheading: ['Courier Prime', 'serif'],
			body: ['Fira Mono', 'monospace']
		}
	},
	plugins: []
};
