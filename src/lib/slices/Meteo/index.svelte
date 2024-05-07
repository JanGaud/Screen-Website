<script>
	import MeteoContainer from '../../components/meteo/MeteoContainer.svelte';
	/** @type {import("@prismicio/client").Content.MeteoSlice} */
	export let slice;
</script>

<section 
class="relative my-28 pointer-events-auto z-30"
data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<MeteoContainer />
</section>
