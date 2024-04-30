<script>
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;
	

	/**
	 * @type {HTMLElement}
	 */
	let titleAnimation;

	onMount(async () => {
		const gsapModule = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');

		gsapModule.gsap.registerPlugin(ScrollTrigger);

		gsapModule.gsap.fromTo(
			titleAnimation,
			{ y: 20, opacity: 0, scale: 1.2 },
			{
				scrollTrigger: {
					trigger: titleAnimation,
					start: 'top center',
					end: 'center center'
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
id={slice.primary.url_id}
class="relative mb-12 lg:mb-28 text-center md:text-left flex justify-center" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <Spotlight width="400px" position="left-3 top-0" rgb="45, 125, 210" />
    <Spotlight width="325px" position="bottom-3" rgb="244, 93, 1" />
    <div class="z-20 w-full flex flex-wrap flex-col items-center gap-4 cursor-none pointer-events-none">
        <h2 bind:this={titleAnimation} class="font-bold tracking-tighter mb-12 text-4xl lg:text-7xl drop-shadow-lg w-fit text-center border-b-8 border-saffron">
            {slice.primary.title}
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-6 lg:grid lg:grid-cols-2">
            <div class="h-[300px] w-full md:h-full overflow-hidden">
                <model-viewer 
				class="h-full w-full pointer-events-auto object-contain"
				src={slice.primary.glb_link} alt="3D avatar" ar shadow-intensity="1" camera-controls auto-rotate></model-viewer>
            </div>
            <div class="flex flex-col gap-4">
                <PrismicRichText field={slice.primary.text} />
            </div>
        </div>
    </div>
</section>
