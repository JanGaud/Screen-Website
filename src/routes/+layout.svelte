<script>
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Navigation from '$lib/components/Navigation.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import MouseFxBg from '$lib/components/MouseFxBg.svelte';
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

<Navigation />
<ThemeToggle />
<main class="bg-white dark:bg-davys_gray-200 min-h-screen pt-32 pb-16 px-4 lg:px-28">
	<slot />
</main>
<MouseFxBg />
<PrismicPreview {repositoryName} />
