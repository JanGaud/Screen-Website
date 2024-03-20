<script>
	/** @type {import("@prismicio/client").Content.HeroSlice} */
	export let slice;
</script>

<section
	class="dark:text-white text-davys_gray"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="flex flex-wrap">
		{#if slice.primary.presentation && slice.primary.what_i_do}
			<hgroup class="w-full lg:w-2/3 text-center lg:text-left z-20 pointer-events-none">
				<h1
					class="font-extrabold text-6xl lg:text-8xl drop-shadow-lg bg-gradient-to-tl from-steel_blue via-yellow_green to-saffron bg"
				>
					{slice.primary.presentation}
				</h1>
				<h2 class="text-2xl lg:text-4xl">{slice.primary.what_i_do}</h2>
			</hgroup>
		{/if}
		<div class="w-full lg:w-1/3"></div>
	</div>
</section>

<style>
	.bg {
		text-transform: uppercase;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
