<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';

	let ScrollTrigger;
	/** @type {import("@prismicio/client").Content.TechListSlice} */
	export let slice;
	/**
	 * @type {any[]}
	 */
	let components = [];
	let itemCount = 15;
	let colorCount = 7;

	function updateCount() {
		itemCount = window.innerWidth < 768 ? 10 : 15;
		colorCount = window.innerWidth < 768 ? 3 : 7;
	}

	onMount(async () => {
		if (typeof window !== 'undefined') {
			updateCount();
			window.addEventListener('resize', updateCount);

			const STModule = await import('gsap/ScrollTrigger');
			ScrollTrigger = STModule.ScrollTrigger;
			gsap.registerPlugin(ScrollTrigger);

			components.forEach((component, index) => {
				if (!component) return;

				const tl = gsap.timeline({
					scrollTrigger: {
						pin: true,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 4
					}
				});

				tl.fromTo(
					component,
					{
						x: () => (index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400))
					},
					{
						x: () =>
							index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400),
						ease: 'power1.inOut'
					}
				);
			});
		}
	});
</script>

<section
	class="relative my-20 lg:my-28 z-20 pointer-events-none"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight width="375px" position="right-10 bottom-0" rgb="45, 125, 210" />
	<h2
		class="font-bold tracking-tighter mb-10 text-4xl lg:text-7xl drop-shadow-lg w-fit text-center border-b-8 border-saffron"
	>
		{slice.primary.title}
	</h2>
	{#each slice.items as { tech_color, tech_name }, index}
		<div
			bind:this={components[index]}
			class="tech-row mb-1 md:mb-3 flex items-center justify-center gap-4 text-[#dcdcdc9f] dark:text-[#6060609f] backdrop-blur-sm"
		>
			{#each Array(itemCount) as _, i}
				<span
					class="tech-item text-7xl md:text-8xl font-bold uppercase tracking-wider drop-shadow-sm"
					style="color: {i === colorCount && tech_color ? tech_color : 'inherit'};"
				>
					{tech_name}
				</span>
				<span class="text-7xl md:text-8xl">•</span>
			{/each}
		</div>
	{/each}
</section>
