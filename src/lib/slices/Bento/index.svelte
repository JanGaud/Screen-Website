<script lang="ts">
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicLink, PrismicRichText } from '@prismicio/svelte';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	/** @type {import("@prismicio/client").Content.BentoSlice} */
	export let slice;
    let cards: HTMLElement[] = [];

    async function animateCard(card: HTMLElement) {
        const gsapModule = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsapModule.gsap.registerPlugin(ScrollTrigger);

        gsapModule.gsap.fromTo(
            card,
            { y: 20, opacity: 0, scale: 1.2 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top center',
                    end: 'center center',
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1.5, 0.5)'
            }
        );
    }

    onMount(() => {
        cards = Array.from(document.querySelectorAll('.card')) as HTMLElement[];
        cards.forEach(animateCard);
    });
</script>

<section
	id={slice.primary.url_id}
	class="relative my-12 lg:my-28 z-30 pointer-events-none"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight width="400px" position="top-4 left-60" pulsate={false} />
	<Spotlight width="325px" position="bottom-3 right-4" rgb="151,204,4" pulsate={true} />
	<header class="w-full text-center">
		<h2 class="font-bold tracking-tighter mb-4 text-4xl lg:text-7xl drop-shadow-lg inline-block">
			{slice.primary.title}
		</h2>
		<p class="w-[300px] text-balance mx-auto text-gray-500 dark:text-davys_gray-700 text-lg">
			{slice.primary.text}
		</p>
	</header>

	<div class="mt-16 grid grid-rows-[auto_auto_auto] md:grid-cols-3 gap-2">
		{#each slice.items as item, i (i)}
			<div
				bind:this={cards[i]}
				class={clsx(
					'card relative md:h-[320px] flex flex-col justify-between border border-davys_gray-100 dark:border-white shadow-md bg-white-backdrop dark:bg-steel-blue-backdrop overflow-hidden',
					item.wide ? 'md:col-span-2' : 'md:col-span-1'
				)}
			>
				<div class="z-30 p-4">
					<h3 class="text-2xl mb-4">{item.title}</h3>
					<div
						class="max-w-md min-h-36 line-clamp-3 overflow-hidden text-balance text-gray-500 dark:text-davys_gray-700"
					>
						<PrismicRichText field={item.body} />
					</div>
				</div>
				<div class="absolute bottom-4 left-2">
					<PrismicLink class="btn-style h-fit" field={item.link}>{item.cta_label}</PrismicLink>
				</div>
			</div>
		{/each}
	</div>
</section>
