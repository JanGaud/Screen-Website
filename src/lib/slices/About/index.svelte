<script>
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;

	/**
	 * @type {HTMLElement}
	 */
	let whatIDoRef;

	onMount(async () => {
		// Dynamic imports for GSAP and its plugins
		const gsapModule = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');

		// Register ScrollTrigger plugin
		gsapModule.gsap.registerPlugin(ScrollTrigger);

		// Now, you can use gsap and ScrollTrigger
		gsapModule.gsap.fromTo(
			whatIDoRef,
			{ y: 20, opacity: 0, scale: 1.2 },
			{
				scrollTrigger: {
					trigger: whatIDoRef,
					start: 'top center',
					end: 'center center',

					toggleActions: 'play none none reverse'
				},
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
	<div
		class="z-20 w-full flex flex-wrap flex-col items-center gap-4 cursor-none pointer-events-none"
	>
		<h2
			bind:this={whatIDoRef}
			class="font-bold tracking-tighter mb-4 text-4xl lg:text-6xl drop-shadow-lg w-fit text-center border-b-8 border-saffron"
		>
			{slice.primary.title}
		</h2>

		<div class="flex flex-wrap justify-center items-center gap-6 lg:grid lg:grid-cols-2">
			<div class="h-[300px] w-full md:h-full border"></div>
			<div class="flex flex-col gap-4">
				<PrismicRichText field={slice.primary.text} />
			</div>
		</div>
	</div>
</section>
