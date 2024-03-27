<script>
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Navigation from '$lib/components/Navigation.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import MouseFxBg from '$lib/components/MouseFxBg.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let isLoading = true;
	let progress = writable(0);

	onMount(() => {
		let intervalTime = 100;
		let totalTime = 1400;
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
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<ProgressBar {isLoading} {progress} />
{#if !isLoading}
	<Navigation />
	<ThemeToggle />
	<main class="min-h-screen mt-32 mb-16 mx-4 md:mx-14 lg:mx-28">
		<slot />
	</main>
{/if}
<MouseFxBg />
<PrismicPreview {repositoryName} />
