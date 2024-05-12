<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { PrismicLink } from '@prismicio/svelte';
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import CodingSymbol from '$lib/components/decorations/CodingSymbol.svelte';
	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;
	/**
	 * @type {HTMLHeadingElement}
	 */
	let presentationRef;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let whatIDoRef;

	onMount(() => {
		gsap
			.timeline()
			.fromTo(
				presentationRef.querySelectorAll('span'),
				{ y: -100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1.3,
					stagger: 0.05,
					ease: 'elastic.out(1.5, 0.5)'
				}
			)
			.fromTo(
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
	class="relative py-44"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight pulsate={true} />
	<div class="flex items-center flex-wrap">
		{#if slice.primary.presentation && slice.primary.what_i_do}
			<div
				class="w-full h-full flex flex-col items-center gap-10 md:w-1/2 lg:w-2/3 z-20 pointer-events-none"
			>
				<hgroup class="w-full text-left flex flex-col gap-4">
					<h1
						bind:this={presentationRef}
						class="font-bold tracking-tighter text-balance text-6xl lg:text-8xl drop-shadow-lg"
					>
						{#each slice.primary.presentation.split(' ') as word, wordIndex}
							<span>
								{#each word.split('') as letter}
									<span>{letter}</span>
								{/each}
							</span>
							{#if wordIndex < slice.primary.presentation.split(' ').length - 1}
								&nbsp;
							{/if}
						{/each}
					</h1>
					<h2 bind:this={whatIDoRef} class="text-2xl lg:text-3xl tracking-tighter">
						{slice.primary.what_i_do}
					</h2>
				</hgroup>
				{#if slice.primary.cta_label && slice.primary.cta_link}
					<div class="w-full flex justify-around md:justify-start">
						<PrismicLink field={slice.primary.cta_link} class="btn-style"
							>{slice.primary.cta_label}</PrismicLink
						>
					</div>
				{/if}
			</div>
		{/if}
		<div
			class="w-full flex justify-center items-center md:w-1/2 lg:w-1/3 z-20 pointer-events-none"
		>
			<CodingSymbol />
		</div>
	</div>
</section>

<style>
	span {
		display: inline-block;
	}
</style>
