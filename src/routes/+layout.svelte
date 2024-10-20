<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Navigation from '$lib/components/Navigation.svelte';
	import MouseFxBg from '$lib/components/MouseFxBg.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Footer from '$lib/components/Footer.svelte';
	import SettingsContainer from '$lib/components/settings/SettingsContainer.svelte';

	let isLoading = true;
	let progress = writable(0);

	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		let intervalTime = 100;
		let totalTime = 1700;
		let increment = (intervalTime / totalTime) * 100;

		const interval = setInterval(() => {
			progress.update((n) => {
				if (n >= 100) {
					clearInterval(interval);
					isLoading = false;
					return 100;
				}
				return n + increment;
			});
		}, intervalTime);

		setTimeout(() => {
			isLoading = false;
			progress.set(100);
		}, totalTime);
	});
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content={$page.data.meta_image}  />
	{/if}
</svelte:head>

<ProgressBar {isLoading} {progress} />
{#if !isLoading}
	<Navigation />
	<SettingsContainer />
	<main
		class="min-h-screen overflow-x-hidden container max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-20"
	>
		<slot />
	</main>
	<Footer />
{/if}
<MouseFxBg />
<PrismicPreview {repositoryName} />

{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "email": "${$page.data.settings.data.company_email}",
  "jobTitle": "${$page.data.settings.data.job_title}",
  "name": "${$page.data.settings.data.name}",
  "url": "${$page.data.settings.data.site_url}"
}
</script>
`}
