<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	/**
	 * @type {never[]}
	 */
	 export let forecasts = [];

	/**
	 * @type {number | Date}
	 */
	let nextSnowTime;
	/**
	 * @type {string}
	 */
	let nextSnowVolume;
	/**
	 * @type {string}
	 */
	let countdown;

	function findNextSnow() {
		for (let forecast of forecasts) {
			// @ts-ignore
			if (forecast.weather.some(w => w.main === 'Snow')) {
				// @ts-ignore
				nextSnowTime = new Date(forecast.dt * 1000);
				// @ts-ignore
				nextSnowVolume = forecast.snow && forecast.snow['3h'] ? forecast.snow['3h'] : 'N/A';
				break;
			}
		}
	}

	function updateCountdown() {
		if (nextSnowTime) {
			const now = new Date();
			// @ts-ignore
			const diff = nextSnowTime - now;

			if (diff > 0) {
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const dayLabel = days === 1 ? 'jour' : 'jours';
				const hourLabel = hours === 1 ? 'heure' : 'heures';

				countdown = days > 0
					? `${days} ${dayLabel} ${hours} ${hourLabel}`
					: `${hours} ${hourLabel}`;
			} else {
				countdown = "Il neige !";
			}
		} else {
			countdown = "Pas de neige prévue dans les 5 prochains jours.";
		}
	}

	onMount(() => {
		findNextSnow();
		updateCountdown();

		const interval = setInterval(updateCountdown, 1000 * 60 * 60);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="bg-white-backdrop dark:bg-steel-blue-backdrop p-2 mb-2 flex items-center gap-4 border rounded-md shadow-md text-sm md:text-lg overflow-hidden">
	{#if nextSnowTime}
		<Icon class="w-6 h-6 text-brand-blue shrink-0" icon="ion:snow" />
		<p class="text-brand-darkBlue flex-1 min-w-0">
            <span class="whitespace-normal break-words">
                Attention! Chute de neige de {#if nextSnowVolume !== 'N/A'}{nextSnowVolume} mm/3 heures {/if}
							dans {countdown} !
            </span>
		</p>
	{:else}
		<p class="text-brand-darkBlue flex-1 min-w-0">
			<span class="whitespace-normal break-words">{countdown}</span>
		</p>
	{/if}
</div>
