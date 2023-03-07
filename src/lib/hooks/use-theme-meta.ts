import { browser } from '$app/environment';
import type { Theme } from '$lib/types/Theme';
import type { Writable } from 'svelte/store';

export function useThemeMeta($theme: Writable<Theme>) {
	if (!browser) return;

	const themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

	$theme.subscribe((theme) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			themeColorMeta.content = '#121212';
		} else {
			document.documentElement.classList.remove('dark');
			themeColorMeta.content = '#f3f4f6';
		}
	});
}
