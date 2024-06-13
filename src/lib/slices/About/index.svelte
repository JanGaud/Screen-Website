<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import Icon from '@iconify/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import formatDate from '../../../utils/dateParser';

	/** @type {import("@prismicio/client").Content.AboutSlice} */
	export let slice;

	/**
	 * @type {HTMLElement}
	 */
	let titleAnimation;

	let isEnglish = false;

	$: {
		isEnglish = $page.url.pathname.startsWith('/en-us');
	}

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
	class="relative my-12 lg:my-28 text-center md:text-left flex justify-center"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<Spotlight width="400px" position="left-3 top-0" rgb="45, 125, 210" pulsate={false} />
	<Spotlight width="325px" position="bottom-3" rgb="244, 93, 1" pulsate={true} />
	<div class="z-20 w-full flex flex-wrap flex-col items-center gap-4 cursor-none pointer-events-none">
		<h2 bind:this={titleAnimation}
			class="font-bold tracking-tighter mb-12 text-4xl lg:text-7xl drop-shadow-lg w-fit text-center border-b-8 border-saffron">
			{slice.primary.title}
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
			<div class="lg:max-h-[600px] overflow-y-auto special-scroll lg:pointer-events-auto z-20 px-2 lg:col-span-1 order-2 lg:order-none">
				<ol class="h-full flex flex-col gap-10">
					{#each slice.items as item}
						<li class="flex flex-col gap-1">
							<small class="text-left text-yellow_green font-semibold">{formatDate(item.date_start)}</small>
							<div class="flex flex-col gap-4 border-l pl-5 py-4">
								<div>
									<h3 class="text-xl font-bold uppercase">{item.company_name}</h3>
									<h4 class="text-sm text-gray-500 dark:text-davys_gray-700">{item.job_title}</h4>
								</div>
								<p class="text-sm">{item.description}</p>
							</div>
							{#if item.still_working}
								<small class="text-left text-persimmon font-semibold">
									{isEnglish ? 'Present' : 'Présent'}
								</small>
							{:else if item.date_end}
								<small class="text-left text-persimmon font-semibold">{formatDate(item.date_end)}</small>
							{/if}
						</li>
					{/each}
				</ol>
			</div>
			<div class="flex flex-wrap justify-center items-center gap-6 lg:col-span-2 order-1 lg:order-none">
				<div class="flex flex-col items-center lg:items-start gap-4 max-w-[650px]">
					<Icon class="w-10 h-10 text-saffron" icon="icomoon-free:quotes-left" />
					<div class="w-full flex flex-col text-center lg:text-left gap-2 md:gap-4 text-balance text-gray-500 dark:text-davys_gray-700 text-lg pl-4">
						<PrismicRichText field={slice.primary.text} />
					</div>
					<Icon class="w-10 h-10 text-saffron" icon="icomoon-free:quotes-right" />
				</div>
			</div>
		</div>
	</div>
</section>
