<script>
	import { geWeatherBackground as weatherBG } from '../../../utils/getWeatherBackground';
	/**
	 * @type {any[]}
	 */
	 export let forecasts = [];
	/**
	 * @type {(arg0: any) => number}
	 */
	 export let kelvinToCelsius;
	/**
	 * @type {(arg0: any) => any}
	 */
	 export let getWeatherIconUrl;

	/**
	 * @param {string | number | Date} dateTimeTxt
	 */
	function formatDate(dateTimeTxt) {
		return new Date(dateTimeTxt).toLocaleDateString('fr-CA', {
			weekday: 'long',
			month: 'long',
			day: 'numeric'
		});
	}

	/**
	 * @param {string | number | Date} dateTimeTxt
	 */
	function formatTime(dateTimeTxt) {
		return new Date(dateTimeTxt).toLocaleTimeString('fr-CA', {
			hour: '2-digit',
			minute: '2-digit'
		});
	}
</script>

<div class="w-full h-fit rounded-lg mt-2 shadow-inner">
	<div class="flex items-center overflow-x-auto snap-x snap-mandatory z-50 pointer-events-auto">
		{#each forecasts as forecast (forecast.dt)}
			<div class="bg-white-backdrop border z-30 pointer-events-auto dark:bg-steel-blue-backdrop snap-center shrink-0 w-[192px] max-h-28 min-h-28 p-1 m-2 rounded-lg backdrop-blur-md shadow-md md:hover:scale-105 transition-all">
				<div class="flex justify-between items-center">
					<div class="flex flex-col gap-4">
						<div>
							<p class="font-bold">{kelvinToCelsius(forecast.main.temp).toFixed(1)}°C</p>
							<small>{forecast.weather[0].description}</small>
						</div>
						<div>
							<p class="text-sm">{formatDate(forecast.dt_txt)}</p>
							<time class="text-sm">{formatTime(forecast.dt_txt)}</time>
						</div>
					</div>
					<div class="flex items-center absolute w-10 h-10 rounded-full shadow-inner top-1 right-1"
							 style="background: {weatherBG(forecast.dt_txt, forecast.weather[0]?.description)}">
						<img class="w-full" src={getWeatherIconUrl(forecast.weather[0].icon)} alt="Weather Icon" />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
