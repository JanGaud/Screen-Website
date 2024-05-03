<script>
	import { writable } from 'svelte/store';
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import { validateForm } from '../../../utils/formValidator';
	import { onMount } from 'svelte';
	import SubmittedForm from '$lib/components/decorations/SubmittedForm.svelte';

	/** @type {import("@prismicio/client").Content.ContactFormSlice} */
	export let slice;
	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	let formStatus = writable(false);

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		if (!form) {
			console.error('Form is not initialized');
			return;
		}
		const isValid = await validateForm(form);
		if (isValid) {
			formStatus.set(true);
		}
	}

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
	class="-mx-4 md:-mx-16 lg:-mx-20 mt-12 lg:mt-28 grid gap-2 md:grid-cols-2 place-items-center min-h-screen bg-davys_gray-100"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="relative h-[500px] md:h-full w-full overflow-hidden">
		<div class="absolute w-full h-full bg-davys_gray-100 opacity-90 pointer-events-none"></div>
		<div
			class="absolute z-30 py-12 text-white w-full h-full flex items-center justify-center pointer-events-none"
		>
			<div class="w-full mx-4 md:mx-10 flex flex-col gap-4 p-2">
				<h3
					class="text-2xl lg:text-5xl uppercase font-bold drop-shadow bg-gradient-to-r from-saffron via-yellow_green to-steel_blue inline-block text-transparent bg-clip-text"
				>
					{slice.primary.banner_title}
				</h3>
				<p class="text-lg tracking-wider drop-shadow">{slice.primary.banner_texte}</p>
			</div>
		</div>
		<PrismicImage class="w-full h-full object-cover" field={slice.primary.letter_image} />
	</div>

	<div class="relative overflow-hidden w-full h-full px-2 md:px-20 py-14">
		{#if $formStatus}<SubmittedForm message={slice.primary.success_message || 'Message sent!'} />
		{:else}
			<div class:fadeOut={$formStatus} class="w-full">
				<Spotlight width="400px" position="top-28 left-32" rgb="244, 93, 1" pulsate={true} />
				<div class="flex justify-center items-center w-full">
					<h2
						bind:this={titleAnimation}
						class="font-bold tracking-tighter my-6 text-4xl lg:text-7xl drop-shadow-lg border-b-8 text-white border-saffron text-center"
					>
						{slice.primary.title}
					</h2>
				</div>
				<form
					on:submit={handleSubmit}
					bind:this={form}
					id={slice.primary.link_url}
					novalidate
					class="w-full h-full flex flex-col items-start"
				>
					<div class="w-full flex flex-col items-start text-davys_gray-700 text-lg">
						<div class="w-full mb-6 z-20 pointer-events-auto">
							<div class="flex items-center justify-between">
								<label for="nom" class="mb-1 flex-1">{slice.primary.name_input_label}</label>
								<p id="errorNom" class="text-red-500 text-xs ml-4"></p>
							</div>
							<input
								type="text"
								id="nom"
								name="nom"
								class="w-full h-8 rounded-full bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
							/>
						</div>
						<div class="w-full mb-6 z-20 pointer-events-auto">
							<div class="flex items-center justify-between">
								<label for="courriel" class="mb-1 flex-1">{slice.primary.mail_input_label}</label>
								<p id="errorCourriel" class="text-red-500 text-xs ml-4"></p>
							</div>
							<input
								type="email"
								id="courriel"
								name="courriel"
								class="w-full h-8 rounded-full bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
							/>
						</div>
						<div class="w-full mb-6 z-20 pointer-events-auto">
							<div class="flex items-center justify-between">
								<label for="message" class="mb-1 flex-1">{slice.primary.message_input_label}</label>
								<p id="errorMessage" class="text-red-500 text-xs ml-4"></p>
							</div>
							<textarea
								id="message"
								name="message"
								class="w-full h-32 bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
								style="resize: none;"
							></textarea>
						</div>

						<div class="w-full flex justify-center md:justify-start z-20 pointer-events-auto">
							<button type="submit" class="btn-style h-fit"
								>{slice.primary.send_button_label}</button
							>
						</div>
					</div>
				</form>
			</div>
		{/if}
	</div>
</section>

<style>
	.fadeOut {
		animation: fadeOutAnimation 1s ease forwards;
	}

	@keyframes fadeOutAnimation {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
