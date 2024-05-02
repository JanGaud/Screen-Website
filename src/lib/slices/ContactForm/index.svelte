<script>
	import Spotlight from '$lib/components/decorations/Spotlight.svelte';
	import { PrismicImage } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.ContactFormSlice} */
	export let slice;
</script>

<section
	class="-mx-4 md:-mx-16 lg:-mx-20 mt-12 lg:mt-28 grid gap-2 md:grid-cols-2 place-items-center min-h-screen bg-davys_gray-100"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="relative h-[500px] md:h-full w-full overflow-hidden">
		<div class="absolute w-full h-full bg-davys_gray-100 opacity-90 pointer-events-none"></div>
		<div
			class="absolute z-20 top-10 right-6 lg:right-2 w-20 lg:w-24 rounded-full border-4 {slice
				.primary.looking_for_work
				? 'border-green-600 border-opacity-50'
				: 'border-red-600 border-opacity-50'}"
		>
			<PrismicImage
				class="w-full h-full object-cover rounded-full grayscale"
				field={slice.primary.avatar}
			/>
		</div>
		<div class="absolute z-20 top-10 right-6 lg:right-2 w-20 lg:w-24 rounded-full">
			<img
				class="w-full h-full object-cover rounded-full"
				src="static/1687102860396.png"
				alt="Letter">
		</div>
		<div
			class="absolute z-30 py-12 text-white w-full h-full flex items-center justify-center pointer-events-none"
		>
			<div class="w-full mx-10 flex flex-col gap-4 p-2">
				<h3 class="text-2xl lg:text-5xl uppercase font-bold drop-shadow">
					{slice.primary.banner_title}
				</h3>
				<p class="text-lg tracking-wider drop-shadow">{slice.primary.banner_texte}</p>
			</div>
		</div>
		<PrismicImage class="w-full h-full object-cover" field={slice.primary.letter_image} />
	</div>

	<div class="relative overflow-hidden w-full px-2 md:px-20 py-14">
		<Spotlight width="400px" position="top-28 left-32" rgb="244, 93, 1" pulsate={true} />
		<div class="flex justify-center items-center w-full">
			<h2
				class="font-bold tracking-tighter my-6 text-4xl lg:text-7xl drop-shadow-lg border-b-8 text-white border-saffron text-center"
			>
				{slice.primary.title}
			</h2>
		</div>
		<form class="w-full h-full flex flex-col items-start" action="post">
			<div class="w-full flex flex-col items-start text-davys_gray-700 text-lg">
				<div class="w-full mb-6 flex flex-col text-lg">
					<label for="name" class="mb-1">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full h-8 rounded-full bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
					/>
				</div>
				<div class="w-full mb-6 flex flex-col text-davys_gray-700 text-lg">
					<label for="email" class="mb-1">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full h-8 rounded-full bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
					/>
				</div>
				<div class="w-full mb-6 flex flex-col text-davys_gray-700 text-lg">
					<label for="message" class="mb-1">Message</label>
					<textarea
						id="message"
						name="message"
						class="w-full h-32 bg-steel-blue-backdrop border px-2 border-white z-20 pointer-events-auto focus:outline-none focus:border-saffron focus:border-2"
						style="resize: none;"
					></textarea>
				</div>
				<div class="z-20 pointer-events-auto">
					<button type="submit" class="btn-style h-fit">Send</button>
				</div>
			</div>
		</form>
	</div>
</section>
