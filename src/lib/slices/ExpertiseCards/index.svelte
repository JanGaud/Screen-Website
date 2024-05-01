<script>
	import Icon from '@iconify/svelte';

	/** @type {import("@prismicio/client").Content.ExpertiseCardsSlice} */
	export let slice;
</script>

<section
	id={slice.primary.url_id}
	class="relative mb-20 lg:mb-28 z-20 pointer-events-none"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="text-center">
		<h2 class="font-bold tracking-tighter mb-12 text-4xl lg:text-7xl drop-shadow-lg inline-block">
			{slice.primary.title}
		</h2>
	</div>

	<div class="lg:px-10">
		<ul class="flex flex-wrap gap-2 lg:gap-0 md:grid md:grid-cols-2 xl:grid-cols-3">
			{#each slice.items as { title, text, icon_string, color }}
				<li
					class="w-full md:min-w-[325px] flex flex-col gap-6 p-4 border-2 shadow-md bg-white-backdrop dark:bg-steel-blue-backdrop"
				>
					<div class="relative flex justify-between items-center h-16">
						{#if icon_string}<Icon class="w-14 h-14" icon={icon_string} />{/if}
						<h3 style="color: {color}" class="text-4xl font-extrabold drop-shadow-md">{title}</h3>
					</div>
					<div class="h-full w-full overflow-hidden">
						<p class="text-lg">{text}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
