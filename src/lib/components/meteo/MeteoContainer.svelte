<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import { geWeatherBackground as weatherBG} from '../../../utils/getWeatherBackground';
	import Clock from '$lib/components/meteo/Clock.svelte';
	import MeteoCards from '$lib/components/meteo/MeteoCards.svelte';
	import CountDownSnow from '$lib/components/meteo/SnowCountdown.svelte';
	import MeteoGhostCard from '$lib/components/meteo/MeteoSkeleton.svelte';
	import MeteoIcon from '$lib/components/meteo/MeteoIcon.svelte';
	import DateToday from '$lib/components/meteo/DateToday.svelte';
	import LocationMeteoAuth from '$lib/components/meteo/LocationMeteoAuth.svelte';

	/**
	 * @type {{ list: any[]; city: { name: any; }; }}
	 */
	let weatherData;
	let isLoading = false;
	let isLocationPermissionRequested = false;
	/**
	 * @type {string | null}
	 */
	let error = null;
	const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;

	onMount(() => {
		const lastAuthTime = parseInt(localStorage.getItem('lastAuthTime'));
		if (!isNaN(lastAuthTime) && new Date().getTime() - lastAuthTime < oneWeekInMillis) {
			isLocationPermissionRequested = true;
			fetchWeatherDataAutomatically();
		}
	});

	/**
	 * @param {GeolocationPositionError} err
	 */
	function handleLocationError(err) {
		isLoading = false;

		if (err.code === err.PERMISSION_DENIED) {
			error =
				"Accès à la localisation refusé. Veuillez autoriser l'accès à la localisation pour voir les données météorologiques.";
			isLocationPermissionRequested = false;
		} else if (err.code === err.POSITION_UNAVAILABLE) {
			error = 'Les informations de localisation ne sont pas disponibles.';
		} else if (err.code === err.TIMEOUT) {
			error = "La demande d'accès à la localisation de l'utilisateur a expiré.";
		} else {
			error = "Une erreur inconnue est survenue lors de l'accès à votre localisation.";
		}
	}

	/**
	 * @param {number} kelvin
	 */
	function kelvinToCelsius(kelvin) {
		return kelvin - 273.15;
	}

	/**
	 * @param {any} iconCode
	 */
	function getWeatherIconUrl(iconCode) {
		return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
	}

	function calculateTextColor() {
		const hour = new Date().getHours();
		return hour > 18 || hour < 5 ? 'text-white' : 'text-brand-darkBlue';
	}

	let backgroundColor = weatherBG(new Date().toISOString());
	let textColor = calculateTextColor();

	$: backgroundColor = weatherBG(new Date().toISOString());
	$: textColor = calculateTextColor();

	$: if (weatherData && weatherData.list && weatherData.list.length > 0) {
		backgroundColor = weatherBG(
			new Date().toISOString(),
			weatherData.list[0].weather[0]?.description
		);
	}

	/**
	 * @param {string} latitude
	 * @param {string} longitude
	 */
	async function fetchWeatherData(latitude, longitude) {
		isLoading = true;
		const formData = new URLSearchParams();
		formData.append('latitude', latitude);
		formData.append('longitude', longitude);

		try {
			const response = await fetch('/external-apis/meteo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData
			});
			if (!response.ok) {
				throw new Error(`erreur HTTP! status: ${response.status}`);
			}
			weatherData = await response.json();
		} catch (e) {
			if (e instanceof Error) {
				error = e.message;
			}
		} finally {
			isLoading = false;
		}
	}

	function fetchWeatherDataAutomatically() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				await fetchWeatherData(position.coords.latitude.toString(), position.coords.longitude.toString());
			}, handleLocationError);
		} else {
			handleLocationError(new GeolocationPositionError('Geolocation is not supported by your browser.'));
		}
	}

	function handleLocationGranted() {
		localStorage.setItem('lastAuthTime', new Date().getTime().toString());
		isLocationPermissionRequested = true;
		fetchWeatherDataAutomatically();
	}
</script>

{#if !isLocationPermissionRequested}
	<LocationMeteoAuth
		{fetchWeatherData}
		on:locationGranted={handleLocationGranted}
		on:locationError={handleLocationError}
	/>
{:else if isLoading}
	<MeteoGhostCard />
{:else if error}
	<p>Error: {error}</p>
{:else if weatherData}
	<CountDownSnow forecasts={weatherData.list} />
	<div
		class="w-full h-60 flex flex-col rounded-lg shadow-inner z-30 pointer-events-auto"
		style="background: {backgroundColor}"
	>
		{#if weatherData.list && weatherData.list.length > 0}
			<div
				class="w-full flex justify-between md:justify-start gap-6 items-center px-2 bg-[#203a4a4d] backdrop-blur rounded-t-lg py-1"
			>
				<h2 class="text-left text-xl font-bold md:text-3xl ml-3 {textColor}">
					{weatherData.city?.name}
				</h2>
				<Clock classText={textColor} />
			</div>
			<div class="w-full flex justify-between items-center px-4">
				<div class={textColor}>
					<p class="text-5xl md:text-7xl font-bold drop-shadow-xl">
						{kelvinToCelsius(weatherData.list[0].main.temp).toFixed(1)}°C
					</p>
					<p class="text-2xl md:text-4xl">
						{weatherData.list[0].weather[0]?.description}
					</p>
				</div>
				<MeteoIcon {weatherData} {getWeatherIconUrl} />
				<DateToday classText={textColor} />
			</div>
		{/if}
	</div>
	<MeteoCards forecasts={weatherData.list} {kelvinToCelsius} {getWeatherIconUrl} />
{/if}
