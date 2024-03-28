<script>
	import Spotlight from "$lib/components/decorations/Spotlight.svelte";
	import { PrismicRichText } from "@prismicio/svelte";

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;
</script>

<section class="relative w-full h-fit mb-10 lg:mb-28 text-center md:text-left flex justify-center" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Spotlight width="400px" position="left-3 top-0" rgb="45, 125, 210"/>
    <div class="z-20 w-full flex flex-col items-center gap-4 cursor-none pointer-events-none">
        <h2 class="font-bold tracking-tighter mb-4 text-4xl lg:text-6xl drop-shadow-lg w-fit text-center border-b-8 border-saffron">{slice.primary.title}</h2>
		<PrismicRichText field={slice.primary.text}/>
    </div>
</section>

