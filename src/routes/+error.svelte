<script>
	import { page } from '$app/stores';
	import { PrismicLink } from '@prismicio/svelte';
</script>

<div
	class="flex flex-col items-center gap-10 pt-20 text-davys_gray-100 dark:text-white px-4 md:px-20"
>
	<div class="flex flex-col items-center">
		<h1
			class="text-[150px] md:text-[200px] font-extrabold drop-shadow-lg bg-gradient-to-r from-saffron via-yellow_green to-steel_blue inline-block text-transparent bg-clip-text"
		>
			{$page.status}
		</h1>

		{#if $page.status === 404}
			<h2 class="text-4xl text-center">{$page.data.errors.data.not_found_text}</h2>
		{/if}
		{#if $page.status === 500}
			<h2 class="text-4xl text-center">{$page.data.errors.data.other_error_text}</h2>
		{/if}
	</div>

	<div class="z-30">
		<PrismicLink field={$page.data.errors.data.cta_link} class="btn-style pointer-events-auto">
			{$page.data.errors.data.cta_label}</PrismicLink
		>
	</div>
</div>
