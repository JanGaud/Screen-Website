<script>
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import clsx from 'clsx';
	import { div } from 'three/examples/jsm/nodes/Nodes.js';

	/** @type {import("@prismicio/client").Content.BentoSlice} */
	export let slice;
</script>

<section
	id={slice.primary.url_id}
	class="relative my-12 lg:my-28 z-30 pointer-events-none"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight width="400px" position="top-4 left-60" pulsate={false} />
	<Spotlight width="325px" position="bottom-3 right-4" rgb="151,204,4" pulsate={true} />
	<header class="w-full text-center">
		<h2 class="text-7xl font-bold drop-shadow-md">{slice.primary.title}</h2>
		<p class="max-w-[400px] text-balance mx-auto text-gray-500 dark:text-davys_gray-700 text-lg">
			{slice.primary.text}
		</p>
	</header>

	<div class="mt-16 grid grid-rows-[auto_auto_auto] md:grid-cols-3 gap-2">
		{#each slice.items as item}
			<div
				class={clsx(
					'class="z-20 relative h-[320px] row-span-3 grid gap-4 p-4 border border-davys_gray-100 dark:border-white shadow-md bg-white-backdrop dark:bg-steel-blue-backdrop overflow-hidden',
					item.wide ? 'md:col-span-2' : 'md:col-span-1'
				)}
			>
				<div class="z-30">
					<h3 class="text-2xl">{item.title}</h3>
					<div class="max-w-md text-balance text-gray-300">
						<PrismicRichText field={item.body} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
