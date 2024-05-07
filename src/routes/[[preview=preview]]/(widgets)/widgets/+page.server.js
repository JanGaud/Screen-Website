// @ts-ignore
import { NotFoundError, asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';

// @ts-ignore
export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByType('widgets');
		console.log(page.results[0].data);

		if (!page) {
			throw error(404);
		}
		else {
			return {
				page,
				title: (page.results[0].data.title),
				meta_description: page.results[0].data.meta_description,
				meta_title: page.results[0].data.meta_title,
				meta_image: page.results[0].data.meta_image?.url
			}
		};

	} catch (err) {
		if (err instanceof NotFoundError) {
			throw error(404);
		} else {
			throw error(500);
		}
	}
}
