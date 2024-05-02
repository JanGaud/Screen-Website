import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		}
	},
	  ssr: {
		external: ['gsap']
	},
	optimizeDeps: {
		include: ['gsap', 'gsap/ScrollTrigger']
	}
});
