<script>
	import Spotlight from "$lib/components/decorations/Spotlight.svelte";

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;
</script>

<section class="relative w-full h-fit mb-28 flex justify-center" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Spotlight width="400px" position="left-3 top-0" rgb="45, 125, 210"/>
    <div>
        <h2 class="font-bold tracking-tighter text-4xl lg:text-6xl drop-shadow-lg">{slice.primary.title}</h2>
    </div>
</section>

