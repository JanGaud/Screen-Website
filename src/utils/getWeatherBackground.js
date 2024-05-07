/**
 * @param {string | number | Date} dateTimeTxt
 * @param {string | undefined} [weatherDescription]
 */
export function geWeatherBackground(dateTimeTxt, weatherDescription) {
	const hour = new Date(dateTimeTxt).getHours();
	const isCloudyOrRainyOrSnowy =
		weatherDescription &&
		((weatherDescription.toLowerCase().includes('nuageux') &&
			!weatherDescription.toLowerCase().includes('peu nuageux') &&
			!weatherDescription.toLowerCase().includes('partiellement nuageux')) ||
			weatherDescription.toLowerCase().includes('couvert') ||
			weatherDescription.toLowerCase().includes('pluie') ||
			weatherDescription.toLowerCase().includes('neige'));

	// Cloudy, Rainy, or Snowy Day Gradient
	const cloudyRainySnowyDayGradient = 'linear-gradient(to top, #8E9EAB, #ECE9E6)';
	// Cloudy, Rainy, or Snowy Night Gradient
	const cloudyRainySnowyNightGradient = 'linear-gradient(to top, #434343, #737373)';

	if (hour >= 5 && hour < 8) {
		// Sunrise
		return isCloudyOrRainyOrSnowy
			? cloudyRainySnowyDayGradient
			: 'linear-gradient(to bottom, #FFDDCC, #FFEEBB)';
	} else if (hour >= 8 && hour < 16) {
		// Day
		return isCloudyOrRainyOrSnowy
			? cloudyRainySnowyDayGradient
			: 'linear-gradient(to top, #91C8F6, #B6E0FE)';
	} else if (hour >= 16 && hour < 19) {
		// Sunset
		return isCloudyOrRainyOrSnowy
			? cloudyRainySnowyDayGradient
			: 'linear-gradient(to bottom, #FFCC88, #FFDDAA)';
	} else {
		// Night
		return isCloudyOrRainyOrSnowy
			? cloudyRainySnowyNightGradient
			: 'linear-gradient(to top, #011C40, #0A2A66)';
	}
}
