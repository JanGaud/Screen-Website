import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	i18n: {
		locales: ['en-US', 'fr-CA'],
		defaultLocale: 'fr-CA',
	},
	preprocess: vitePreprocess()
};
export default config;