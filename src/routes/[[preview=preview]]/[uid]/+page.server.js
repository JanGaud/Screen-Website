import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('page', params.uid);
		if (!page) {
			throw error(404);
		}
		else{
		return {
			page,
			title: asText(page.data.title),
			meta_description: page.data.meta_description,
			meta_title: page.data.meta_title,
			meta_image: page.data.meta_image?.url
		}};

	} catch (err) {
		if (err.message && err.message.includes('No documents were returned')) {
			throw error(404);
		}
		throw error(500, 'Internal server error'); 
	}
}
