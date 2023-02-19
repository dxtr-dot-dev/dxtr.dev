const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.yellow['500']
			}
		},
		fontFamily: {
			heading: ['Mokoto', 'sans-serif'],
			subheading: ['Courier Prime', 'serif'],
			body: ['Fira Mono', 'monospace']
		}
	},
	plugins: []
};
