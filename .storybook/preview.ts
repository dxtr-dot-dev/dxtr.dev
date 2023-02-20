import '@fontsource/courier-prime';
import '@fontsource/fira-mono';

import '../src/app.css';

export const parameters = {
	backgrounds: {
		default: 'light'
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	layout: 'fullscreen'
};
