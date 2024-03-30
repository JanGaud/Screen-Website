<script>
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;

	/**
	 * @type {gsap.TweenTarget}
	 */
	let whatIDoRef;

	onMount(() => {
		gsap.timeline().fromTo(
			whatIDoRef,
			{ y: 20, opacity: 0, scale: 1.2 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 1,
				ease: 'elastic.out(1.5, 0.5)'
			}
		);
	});
</script>

<section
	class="relative mb-10 lg:mb-20 text-center md:text-left flex justify-center"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight width="400px" position="left-3 top-0" rgb="45, 125, 210" />
	<Spotlight width="325px" position="bottom-3" rgb="244, 93, 1" />
	<div class="z-20 w-full flex flex-wrap flex-col items-center gap-4 cursor-none pointer-events-none">
		<h2
			bind:this={whatIDoRef}
			class="font-bold tracking-tighter mb-4 text-4xl lg:text-6xl drop-shadow-lg w-fit text-center border-b-8 border-saffron"
		>
			{slice.primary.title}
		</h2>
		<div class="">
			<div class="overflow-hidden">

			</div>
			<div class="flex flex-col gap-4">
				<PrismicRichText field={slice.primary.text} />
			</div>
		</div>
	</div>
</section>