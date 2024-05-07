<script>
	import MeteoContainer from '../../components/meteo/MeteoContainer.svelte';
	/** @type {import("@prismicio/client").Content.MeteoSlice} */
	export let slice;
</script>

<section
	class="relative my-28"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
<div class="w-fit">
	<h2 class="font-bold tracking-tighter mb-4 text-4xl lg:text-7xl drop-shadow-lg inline-block pointer-events-none">
		{slice.primary.title}
	</h2>
</div>
	<MeteoContainer />
</section>
