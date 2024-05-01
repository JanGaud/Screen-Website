<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	const brand = $page.data.settings.data;
	const socials = $page.data.social.data.social_medial;

	const iconMap = {
		facebook: 'circum:facebook',
		x: 'circum:twitter-x-line',
		instagram: 'circum:instagram',
		youtube: 'circum:youtube',
		tiktok: 'circum:baseline-tiktok',
		linkedin: 'circum:linkedin',
		github: 'ph:github-logo'
	};

	/**
	 * @param {string} name
	 */
	function getSocialIcon(name) {
		if (typeof name === 'string') {
			const iconName = name.toLowerCase();
			// @ts-ignore
			return iconMap[iconName] || 'mdi:alert-circle';
		} else {
			return 'mdi:alert-circle';
		}
	}
</script>

<footer class="z-50 flex flex-col items-center pointer-events-auto max-w-screen-2xl mx-auto">
	<div class="container pt-9">
		<div class="mb-6 flex justify-center space-x-2">
			{#each socials as { social_link, social_icon }}
				<PrismicLink
					field={social_link}
					class="rounded-full z-40 pointer-events-auto cursor-pointer p-3"
				>
					<Icon class="w-7 h-7 drop-shadow-lg" icon={getSocialIcon(social_icon)} />
				</PrismicLink>
			{/each}
		</div>
	</div>

	<div
		class="w-full z-20 pointer-events-auto opacity-75 flex justify-center items-center bg-white-backdrop dark:bg-steel-blue-backdrop p-4 text-center text-davys_gray dark:text-white"
	>
		<div class="flex items-center gap-2">
			<a class="w-6 h-6" href="/">
				<PrismicImage class="w-full h-full object-contain dark:brightness-100 brightness-0" field={brand.square_logo} /></a
			>
			<span>/</span>
			{brand.legal_mention}
		</div>
	</div>
</footer>
