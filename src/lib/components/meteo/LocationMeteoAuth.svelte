<script>
	import { createEventDispatcher } from 'svelte';
	import CardCarrouselSkeleton from '$lib/components/meteo/CardCarrouselSkeleton.svelte';
	import SnowCountSkeleton from '$lib/components/meteo/SnowCountSkeleton.svelte';

	const dispatch = createEventDispatcher();
	/**
	 * @type {(arg0: number, arg1: number) => void}
	 */
	export let fetchWeatherData;

	let isSwitchOn = false;

	function onToggleChange() {
		if (!isSwitchOn) {
			isSwitchOn = true;
			requestLocationPermission();
		} else {
			isSwitchOn = false;
		}
	}

	function requestLocationPermission() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					fetchWeatherData(position.coords.latitude, position.coords.longitude);
					dispatch('locationGranted');
				},
				(err) => {
					isSwitchOn = false;
				}
			);
		} else {
			isSwitchOn = false;
			dispatch('locationUnsupported');
		}
	}
</script>

<SnowCountSkeleton />
<div class="w-full flex flex-col gap-10 h-60 shadow-inner border rounded-2xl">
	<hgroup class="px-2 py-1 flex text-2xl md:text-4xl bg-[#203a4a4d] backdrop-blur rounded-t-2xl">
		<h2 class="uppercase pr-2 drop-shadow-lg text-white font-semibold tracking-wider">
			Neige.tech
		</h2>
		<h3 class="border-l-4 pl-2 border-gray-500 text-gray-500">Météo</h3>
	</hgroup>
	<div class="flex flex-col gap-2 items-center px-2">
		<p class="text-center">
			Veuillez autoriser l'accès à votre localisation pour activer cette fonctionnalité.
		</p>
		<div>
			<label for="geo-switch" class="flex items-center cursor-pointer">
				<div class="relative">
					<input
						type="checkbox"
						id="geo-switch"
						class="sr-only"
						checked={isSwitchOn}
						on:change={onToggleChange}
					/>
					<div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
					<div
						class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
						class:translate-x-6={isSwitchOn}
					></div>
				</div>
			</label>
		</div>
	</div>
</div>
<CardCarrouselSkeleton />

<style>
	input + div {
		background-color: #ff2000;
	}

	input:checked + div {
		background-color: #4ade80;
	}

	.dot {
		transition: transform 0.3s ease-in-out;
	}
</style>
