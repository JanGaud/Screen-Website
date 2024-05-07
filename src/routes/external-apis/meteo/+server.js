import { VITE_WEATHER_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const form = await request.formData();
	const lat = form.get('latitude');
	const lon = form.get('longitude');
	const apiKey = VITE_WEATHER_API_KEY;

	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=fr&appid=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		return new Response(JSON.stringify(data));
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
}
