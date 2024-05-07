<script>
	export let weatherData;
	export let getWeatherIconUrl;
</script>

<div>
	{#if weatherData.list && weatherData.list.length > 0}
		<img
			class="drop-shadow-xl w-48 weather-icon"
			src={getWeatherIconUrl(weatherData.list[0].weather[0]?.icon)}
			alt="Weather Icon"
		/>
	{/if}
</div>

<style>
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-3px);
        }
    }

    .weather-icon {
        animation: float 3s ease-in-out infinite;
    }
</style>