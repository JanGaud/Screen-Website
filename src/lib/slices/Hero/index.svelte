<script>
	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;
</script>

<section
	class="dark:text-white text-davys_gray"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if slice.primary.presentation && slice.primary.what_i_do}
		<hgroup>
			<h1 class="font-extrabold text-7xl">{slice.primary.presentation}</h1>
			<h2 class="text-4xl">{slice.primary.what_i_do}</h2>
		</hgroup>
	{/if}
</section>
