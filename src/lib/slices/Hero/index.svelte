<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { PrismicLink } from '@prismicio/svelte';
	import ThreeDThunder from '$lib/components/threeD/ThreeDThunder.svelte';
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
	class="dark:text-white text-davys_gray"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="flex flex-wrap h-screen">
		{#if slice.primary.presentation && slice.primary.what_i_do}
			<div class="w-full flex flex-col justify-start gap-10 lg:p-10 lg:w-2/3 z-20 pointer-events-none">
				<hgroup class="text-left">
					<h1 bind:this={presentationRef} class="font-bold text-5xl lg:text-7xl drop-shadow-lg">
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
					<h2 bind:this={whatIDoRef} class="text-2xl lg:text-3xl">
						{slice.primary.what_i_do}
					</h2>
				</hgroup>
				{#if slice.primary.cta_label && slice.primary.cta_link}
				<PrismicLink field={slice.primary.cta_link} 
					class="btn-style">{slice.primary.cta_label}</PrismicLink>
				{/if}
			</div>
		{/if}
		<div class="w-full lg:w-1/3 z-20 pointer-events-none"><ThreeDThunder/></div>
	</div>
</section>

<style>
	span {
		display: inline-block;
		-webkit-text-fill-color: initial;
	}
</style>
